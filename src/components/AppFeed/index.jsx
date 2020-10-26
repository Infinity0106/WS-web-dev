import React from "react";
import { Layout, Row, Col } from "antd";
import Post from "./../Post";
import { POSTS, getPosts } from "./../../backend";

const { Content } = Layout;

export default class AppFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <Layout>
        <Content style={{ backgroundColor: "white" }}>
          <Row justify="center" gutter={[16, 16]}>
            {this.state.data.map((ele) => (
              <Col span={16} className="gutter-row">
                <Post
                  id={ele.id}
                  img={ele.img}
                  avatar={ele.avatar}
                  title={ele.title}
                  desc={ele.desc}
                  onRefresh={this.refreshPosts.bind(this)}
                />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    );
  }

  async componentDidMount() {
    await this.refreshPosts();
  }

  async refreshPosts() {
    const res = await getPosts();
    this.setState({ data: res.data });
  }
}
