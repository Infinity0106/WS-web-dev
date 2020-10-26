import React from "react";
import { Card, Avatar } from "antd";
import { EditOutlined, SmileOutlined, DeleteOutlined } from "@ant-design/icons";
import { deletePost } from "./../../backend";

import "./style.css";
import { Link } from "react-router-dom";

const { Meta } = Card;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false
    };
  }
  likePost(e) {
    this.setState({ like: !this.state.like });
  }
  async onDeleteClick() {
    console.log(this.props.id);
    if (!this.props.id) {
      return;
    }

    await deletePost(this.props.id);
    this.props.onRefresh();
  }
  render() {
    return (
      <Card
        style={{ minWidth: 300 }}
        cover={<img alt="example" src={this.props.img} />}
        actions={[
          <SmileOutlined
            key="like"
            className="iconHover-like"
            onClick={this.likePost.bind(this)}
            style={{
              color: this.state.like ? "red" : null
            }}
          />,
          <Link to={`/app/post/${this.props.id}/edit`}>
            <EditOutlined key="edit" />
          </Link>,
          <DeleteOutlined onClick={this.onDeleteClick.bind(this)} />
        ]}
      >
        <Meta
          avatar={<Avatar src={this.props.avatar} />}
          title={this.props.title}
          description={this.props.desc}
        />
      </Card>
    );
  }
}

Post.defaultProps = {
  id: null,
  img:
    "https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&rect=17%2C0%2C5964%2C2982&q=45&auto=format&w=1356&h=668&fit=crop",
  avatar:
    "https://ei.marketwatch.com/Multimedia/2020/04/09/Photos/ZQ/MW-IE203_corona_20200409232441_ZQ.jpg?uuid=d12f4334-7ada-11ea-b13a-9c8e992d421e",
  title: "Card title",
  desc: "This is the description",
  onRefresh: () => {}
};

export default Post;
