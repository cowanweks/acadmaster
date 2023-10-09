import "./ToolBar.css";
import { Button, Input } from "antd";
import { GrPrint as Printer, GrAdd as PlusOutlined } from "react-icons/gr";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";

export function ToolBar() {
  return (
    <div id="ToolBar">
      <Input
        type="text"
        prefix={<SearchOutlined />}
        allowClear={true}
        placeholder="Search"
        style={{
          width: "130px",
          height: "32px",
          borderColor: "#d9d9d9",
          boxShadow: "0 2px 0 rgba(0, 0, 0, 0.02)",
          borderRadius: "0",
          border: "1px solid black",
        }}
      />
      <select
        defaultValue="default"
        style={{
          width: "110px",
          height: "32px",
          borderRadius: "0",
          paddingLeft: "10px",
          borderColor: "#d9d9d9",
          border: "1px solid black",
          boxShadow: "0 2px 0 rgba(0, 0, 0, 0.02)",
        }}
      >
        <option disabled value="default">
          Class
        </option>
        <option value="">Form 1</option>
        <option value="">Form 2</option>
        <option value="">Form 3</option>
        <option value="">Form 4</option>
      </select>
      <select
        defaultValue="default"
        style={{
          width: "110px",
          height: "32px",
          borderRadius: "0",
          paddingLeft: "10px",
          border: "1px solid black",
        }}
        placeholder="Stream"
      >
        <option disabled value="default">
          Stream
        </option>
        <option value="">North</option>
        <option value="">South</option>
        <option value="">East</option>
        <option value="">West</option>
      </select>
      <select
        defaultValue="2023"
        style={{
          width: "110px",
          height: "32px",
          borderRadius: "0",
          paddingLeft: "10px",
          border: "1px solid black",
        }}
      >
        <option value="2023">2023</option>
        <option value="">2022</option>
        <option value="">2021</option>
        <option value="">2020</option>
      </select>
      <Button icon={<PlusOutlined />} style={{ borderRadius: "0" }}>
        New
      </Button>
      <Button icon={<Printer />} style={{ borderRadius: "0" }}>
        Print
      </Button>
    </div>
  );
}
