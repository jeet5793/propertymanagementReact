import React from 'react'
import API_URL from '../../../app-config';


export default class LeaveComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog_id: "",
      name: "",
      email: "",
      comment: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.postComment = this.postComment.bind(this)
    this.updateParent = this.updateParent.bind(this)
  }
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  postComment() {
    var flag = false;
    var blogId = this.props.blogDetail[0].id;
    // var opts=this.state
    var jsonBody = {
      blog_id: blogId,
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment
    }
    if (jsonBody.blog_id !== '')
      fetch(`${API_URL}/assetsapi/blog_comment_insert`, {
        method: 'post',
        body: JSON.stringify(jsonBody)
      })
        .then((response) => {
          return response.json();
        }).then((data) => {
          if (data.success === 1) {
            this.setState({
              blog_id: "",
              name: "",
              email: "",
              comment: ""
            })
            alert(data.msg)
            flag = true;
          }
        });
    if (flag){
      this.updateParent(jsonBody.blog_id)
    }
  }
  updateParent(id) {
    this.props.onChange(id)
  }
  // /blog-detail
  componentDidMount() {

  }

  render() {
    return (
      <div className="tzComments">
        <div id="comments" className="comments-area">
          <div className="tz-comment-form text-center">
            <div id="respond" className="comment-respond">
              <h3 id="reply-title" className="comment-reply-title"><span>Leave Your Comment</span>
                <small><a rel="nofollow" id="cancel-comment-reply-link" style={{ display: 'none' }}>Cancel reply</a></small></h3>
              <div id="commentform" className="comment-form">
                <p className="comment-notes">
                  <span id="email-notes">Your email address will not be published.</span>
                  Required fields are marked <span className="required">*</span>
                </p>
                <div className="clearfix"></div>
                <div className="tzcomment-textarea logged">
                  <textarea placeholder="Your Comment..." rows="5" id="comment1" name="comment1" className="form-control"></textarea>
                </div>
                <div className="tz-comment-author pull-left">
                  <input id="author" className="form-control" placeholder="Your Name..." value={this.state.name} onChange={this.onChangeHandler} name="name" type="text" size="30" aria-required='true' />
                </div>
                <div className="tz-comment-email pull-right">
                  <input id="email" className="form-control" placeholder="Email Adress..." name="email" value={this.state.email} onChange={this.onChangeHandler} type="text" size="30" aria-required='true' />
                </div>
                <div className="clearfix"></div>
                <div className="tzcomment-textarea">
                  <textarea placeholder="Your Comment..." rows="5" id="comment" onChange={this.onChangeHandler} name="comment" value={this.state.comment} className="form-control"></textarea>
                </div>
                <p className="form-submit">
                  <input name="submit" type="submit" onClick={this.postComment} id="submit" className="submit" value="POST COMMENT" />
                  {/* <input type='hidden' name='comment_post_ID' value='523' id='comment_post_ID' />
           <input type='hidden' name='comment_parent' id='comment_parent' value='0' /> */}
                </p>
              </div>
            </div>
            {/*} <!-- #respond --> */}
          </div>
        </div>
        {/*<!-- #comments .comments-area --> </div>*/}
      </div>);
  }
}