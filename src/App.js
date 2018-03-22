import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home';
import Chat from './Chat';

// APIで返事を取得
const getReply = async (id) => {
  try {
    const formData = new FormData();
    formData.append('id', id);
    const url = "http://ec2-54-250-242-229.ap-northeast-1.compute.amazonaws.com/api.php";
    const options = {
      method: 'POST',
      body: formData,
      //credentials: 'include',
      mode: 'cors'  
    }

    const res = await fetch(url, options);
    const data = await res.text();
    return data;
  } catch(e) {
    console.log(e);
  }
}

class App extends React.PureComponent{
  constructor(props){
    super(props);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  state = {
    id: 0,
    otherName: 'Miko',
    myName: 'Your Name',
    body: 'hello',
    posts: [{ name:'Miko', body:'hello', id:Date.now() }]
  }

  // Homeに戻った時にメッセージを初期化
  handleBack() {
    this.setState({
      posts: []
    });
  }

  // Homeで名前が変わった時に反映させる
  handleChangeName(event){
    this.setState({
      myName: event.target.value
    });
  }

  // state内の投稿リストに加える
  setPost(newPost, res) {
    // 相手の投稿
    const reply = {
      name: this.state.otherName,
      body: res,
      id: Date.now()+1
    }

    const myBody = this.state.body;
    // 投稿にidを付与する
    const newPostWithId = {
      name: this.state.myName,
      body: myBody,
      id: Date.now()
    }

    this.setState({
      id: this.state.id + 1,
      posts: [...this.state.posts, newPostWithId, reply]
    });
  }

  // Formが作成した投稿を保存する処理
  saveNewPost(newPost) {
    getReply(this.state.id).then(res => this.setPost(newPost, res));
  }

  // 本文への入力を処理する
  handleChangeBody(event) {
    this.setState({
      body: event.target.value
    });
  }

  // 投稿処理を行う
  async handleSubmit(event) {
    event.preventDefault();

    const name = this.state.myName;
    const body = this.state.body;

    // 本文のバリデーション
    if ( !body || body.length === 0 ) {
      alert("message is empty");
      return;
    }

    // 投稿内容を作成する
    const newPost = {
      name,
      body,
    };

    // 投稿する
    await this.saveNewPost(newPost);

    // フォームの内容をリセットする
    await this.setState({
      body: ''
    });
  }

  render(){
    return(
      <Router>
        <Wrapper>
          <Route exact path='/' render={() => <Home 
            myName={this.state.myName} 
            handleChangeName={this.handleChangeName} />
          } />
          <Route path='/chat' render={() => <Chat
            otherName={this.state.otherName}
            myName={this.state.myName} 
            body={this.state.body}
            posts={this.state.posts} 
            handleBack={this.handleBack}
            saveNewPost={this.saveNewPost}
            handleChangeBody={this.handleChangeBody}
            handleSubmit={this.handleSubmit} />
          } />
        </Wrapper>
      </Router>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
 `;

export default App;
