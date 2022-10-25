import { tweetsData } from './data.js'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

let savedTweetsData = JSON.parse(localStorage.getItem("savedTweetsData"))|| tweetsData

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
       handleLikeClick(e.target.dataset.like) 
    }
    else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if(e.target.dataset.thread){
        handleThreadClick(e.target.dataset.thread)
    }
    else if(e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if(e.target.dataset.addreply){
        handleMakeReplyClick(e.target.dataset.addreply)
    }
    else if(e.target.dataset.close){
        handleCloseReply(e.target.dataset.close)
    }
    else if(e.target.dataset.remove){
        handleRemoveTweet(e.target.dataset.remove)
    }
    else if(e.target.id === 'tweet-btn'){
        handleTweetBtnClick()
    }
})
function handleLikeClick(tweetId){
    const targetTweetObj = savedTweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isLiked){
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++ 
    }
    targetTweetObj.isLiked = !targetTweetObj.isLiked
    localStorage.setItem("savedTweetsData", JSON.stringify(savedTweetsData))
    savedTweetsData = JSON.parse(localStorage.getItem("savedTweetsData"))
    render()
}

function handleRetweetClick(tweetId){
    const targetTweetObj = savedTweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]
    
    if(targetTweetObj.isRetweeted){
        targetTweetObj.retweets--
    }
    else{
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
    localStorage.setItem("savedTweetsData", JSON.stringify(savedTweetsData))
    savedTweetsData = JSON.parse(localStorage.getItem("savedTweetsData"))
    render() 
}

function handleThreadClick(replyId){
    localStorage.setItem("savedTweetsData", JSON.stringify(savedTweetsData))
    savedTweetsData = JSON.parse(localStorage.getItem("savedTweetsData"))
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
    /**Here I change the button text depending on the situation 
     * we have to check previously if we have any reply to show
    */
    const targetTweetObj = savedTweetsData.filter(function(tweet){
        return tweet.uuid === replyId
    })[0] 
    if (targetTweetObj.replies.length){
        if(document.getElementById(`replies-${replyId}`).classList.contains('hidden')){
            document.getElementById(`thread-${replyId}`).textContent = "Show"
        }else{
            document.getElementById(`thread-${replyId}`).textContent = "Hide"
        }
    }
}
function handleReplyClick(replyId){
    document.getElementById(`reply-items-${replyId}`).classList.remove("hidden")
}
function handleMakeReplyClick(replyId){
    const replyInput = document.getElementById(`textarea-${replyId}`)
    if(replyInput.value){
        const replyItem = savedTweetsData.filter(tweet => tweet.uuid === replyId)
        replyItem[0].replies.push(
            {
                handle: `@Myself`,
                profilePic: `images/LOGO-ITWEET.png`,
                tweetText: replyInput.value,
            }
        )
        localStorage.setItem("savedTweetsData", JSON.stringify(savedTweetsData))
        savedTweetsData = JSON.parse(localStorage.getItem("savedTweetsData"))
        render()
    }
}
function handleCloseReply(closeId){
    document.getElementById(`reply-items-${closeId}`).style.display = "none"
}
function handleRemoveTweet(removeTweetId){
    savedTweetsData =  savedTweetsData.filter(item => item.uuid !== removeTweetId)
    localStorage.setItem("savedTweetsData", JSON.stringify(savedTweetsData))
    savedTweetsData = JSON.parse(localStorage.getItem("savedTweetsData"))
    console.log(savedTweetsData)
    render()
}
function handleTweetBtnClick(){
    const tweetInput = document.getElementById('tweet-input')
    if(tweetInput.value){
        savedTweetsData.unshift({
            handle: `@Myself`,
            profilePic: `images/LOGO-ITWEET.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })
        localStorage.setItem("savedTweetsData", JSON.stringify(savedTweetsData))
        savedTweetsData = JSON.parse(localStorage.getItem("savedTweetsData"))
        render()
        tweetInput.value = ''
    }
}

function getFeedHtml(){
    let feedHtml = ``
    savedTweetsData.forEach(function(tweet){
        let likeIconClass = ''
        if (tweet.isLiked){
            likeIconClass = 'liked'
        }
        let retweetIconClass = ''
        if (tweet.isRetweeted){
            retweetIconClass = 'retweeted'
        }
        let repliesHtml = ''
        if(tweet.replies.length > 0){
            tweet.replies.forEach(function(reply){
                repliesHtml+=`
                    <div class="tweet-reply">
                        <div class="tweet-inner">
                            <img src="${reply.profilePic}" class="profile-pic">
                                <div>
                                    <p class="handle">${reply.handle}</p>
                                    <p class="tweet-text">${reply.tweetText}</p>
                                </div>
                            </div>
                    </div>
                    `
            })
        }
       
        feedHtml += `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src="${tweet.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${tweet.handle}</p>
                        ${tweet.handle === "@Myself" ? `<button class="remove" data-remove="${tweet.uuid}">Remove</button>` : ""}
                        
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                                <!-- Here we're going to add new replies-->
                                <i class="fa-regular fa-comment-dots"
                                data-reply="${tweet.uuid}"
                                ></i>
                                ${tweet.replies.length}
                            </span>
                            <!-- This button is going to show all the replies -->
                            <button class="thread" id="thread-${tweet.uuid}" data-thread="${tweet.uuid}">Show </button>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-heart ${likeIconClass}"
                                data-like="${tweet.uuid}"
                                ></i>
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-retweet ${retweetIconClass}"
                                data-retweet="${tweet.uuid}"
                                ></i>
                                ${tweet.retweets}
                            </span>
                        </div> 
                        
                    </div>            
                </div>
                <!-- Form to make a reply-->
                <div class="hidden reply-form" id="reply-items-${tweet.uuid}" data-replyitems="${tweet.uuid}">
                    <button class="close" id="close-${tweet.uuid}" data-close="${tweet.uuid}">X</button>
                    <h4>Reply to ${tweet.handle}</h4>
                    <textarea id="textarea-${tweet.uuid}" data-textarea="${tweet.uuid}" placeholder="Make your reply"></textarea>
                    <button id="replyBtn-${tweet.uuid}" data-addreply="${tweet.uuid}">Reply</button>
                </div>
                <!-- Here we show the replies-->
                <div class="hidden" id="replies-${tweet.uuid}">
                    ${repliesHtml}
                </div>   
            </div>
            `

   })
   
   return feedHtml 
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
