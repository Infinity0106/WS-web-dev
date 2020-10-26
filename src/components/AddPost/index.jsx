import React from "react";
import { Row, Col, Form, Input, Button, Alert } from "antd";
import { POSTS, createPost, getPost, putPost } from "./../../backend";
import Post from "./../Post";

export default class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: undefined,
      avatar: undefined,
      title: undefined,
      desc: undefined,
      successfull: false
    };
    this.FormI = Form.create();
  }
  async onFinish(values) {
    // POSTS.push(values);
    if (this.props.match.params.edit !== "edit") {
      await createPost(values);
    } else {
      await putPost(this.props.match.params.id, values);
    }
    this.setState({ successfull: true });
  }
  onChangeValue(key) {
    let self = this;
    return (e) => {
      e.preventDefault();
      self.setState({ [key]: e.target.value });
    };
  }
  render() {
    return (
      <>
        <Row justify="center" gutter={[16, 16]}>
          <Col span={12}>
            <Form
              form={this.FormI}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              name="nest-messages"
              onFinish={this.onFinish.bind(this)}
            >
              <Form.Item
                name={["title"]}
                label="Title"
                rules={[{ required: true }]}
              >
                <Input onChange={this.onChangeValue("title")} />
              </Form.Item>
              <Form.Item
                name={["img"]}
                label="Image URL"
                rules={[{ type: "url", required: true }]}
              >
                <Input onChange={this.onChangeValue("img")} />
              </Form.Item>
              <Form.Item
                name={["desc"]}
                label="Description"
                rules={[{ required: true }]}
              >
                <Input.TextArea onChange={this.onChangeValue("desc")} />
              </Form.Item>
              <Form.Item
                name={["avatar"]}
                label="Avatar URL"
                rules={[{ type: "url", required: true }]}
              >
                <Input onChange={this.onChangeValue("avatar")} />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 6, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  {this.props.match.params.edit !== "edit" ? "Post" : "Update"}
                </Button>
              </Form.Item>
            </Form>
            {this.state.successfull && (
              <Alert message="Success operation" type="success" />
            )}
          </Col>
          <Col span={12}>
            <Post
              img={this.state.img}
              avatar={this.state.avatar}
              title={this.state.title}
              desc={this.state.desc}
            />
          </Col>
        </Row>
      </>
    );
  }
  async componentDidMount() {
    if (this.props.match.params.edit !== "edit") {
      return;
    }

    // resetFields();

    let res = await getPost(this.props.match.params.id);
    this.setState(res.data);
    console.log(this.FormI);
    console.log(res.data);
    console.log(this.props.match);
  }
}
