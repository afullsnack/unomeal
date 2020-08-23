import React, { Component, useEffect, useState } from 'react';
import Card from 'antd/lib/card';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import Button from 'antd/lib/button';
import Avatar from 'antd/lib/avatar';
import Input from 'antd/lib/input';

const { TextArea } = Input;

function ReviewBox () {
   const [value, setValue] = useState("");
   return (
      <Card actions={[<Button type="link" onClick={() => alert(value)}>ADD COMMENT</Button>]}>
         <Card.Meta
            title="User Name"
            description="Rating"
            avatar={
               <Avatar
                  shape="cirular"
                  size={55}
                  src="/favicon.png"
               />
            }
            style={{marginBottom: 10}}
         />
         <TextArea allowClear rows={4} value={value} onChange={e => setValue(e.target.value)} />
         <br/>
         <Button type="link" block>FEATURE YOUR FAVORITE DISHES</Button>
      </Card>
   );
}

export default ReviewBox;