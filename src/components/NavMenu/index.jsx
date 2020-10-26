import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "antd";
import { EditOutlined, ArrowLeftOutlined } from "@ant-design/icons";

class NavMenu extends React.Component {
  render() {
    if (!this.props.location.pathname.includes("/app")) {
      return null;
    }

    if (this.props.location.pathname.includes("/app/post")) {
      return (
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Link to="/app" replace>
            <Button type="primary" icon={<ArrowLeftOutlined />}>
              Back to feed
            </Button>
          </Link>
        </div>
      );
    }

    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Link to="/app/post">
          <Button type="primary" icon={<EditOutlined />}>
            Add post
          </Button>
        </Link>
      </div>
    );
  }
}

export default withRouter(NavMenu);
