import React, {Component} from 'react';
import '../page.css'
import {fetchCommentsbyArticleId} from '../api'
import UpdateVote from './updateCommentVote';


class CommentsById extends React.Component {
    
    state ={ 
        comments: [],
        updateProps: false
    }

    getComments = (event) => {
        fetchCommentsbyArticleId(this.props.Article_id).then( comments => {
                this.setState({comments:comments})
        })
    }

    render () {
    const {comments} = this.state;
   
    return (
        <div>
        <div className="welcome_page">
          <h2 className="Banner">  Comments for Article Id: {this.props.Article_id} </h2>
        </div>
        <div className="page_layout" id="articlelist"> 
            <ul>
                {comments.map(comment => {
                    return (  
                        <li key={comment.comment_id}> 
                        Comment Id: {comment.comment_id} <br></br>
                        Votes: {comment.votes}<br></br>
                        Created At: {comment.created_at}<br></br>
                        Author: {comment.author}<br></br>
                        Comment: {comment.body}<br></br>
                        <UpdateVote comment={comment}/>
                        </li> 
                )} 
                )}
            </ul>
          </div>
          </div>

    )
    }
    componentDidMount = () => {
        this.getComments();
    }

    componentDidUpdate= (prevProps, prevState) => {
        console.log(prevProps)
        if(prevProps !== this.props){
            this.getComments(); 
        }
    }
    }


export default CommentsById;