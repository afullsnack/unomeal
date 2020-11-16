import { useState } from "react";
import Button from "ui/button";
import Space from "ui/space";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons"

export default function CartControls() {
  const [qty, setQty] = useState(1);
  return (
    <>
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
        <Button type="link" size="large" icon={<MinusOutlined />} style={{ border: '1px solid #F3F3F3', borderRadius: 2, color: '#030301'}} onClick={() => setQty(prevState => (prevState<=1? 1 : prevState-1))} />
        <Button type="link" size="large" style={{color: '#030301'}}>{qty}</Button>
        {/* <span>1</span> */}
        <Button type="link" size="large" icon={<PlusOutlined />} style={{ border: '1px solid #F3F3F3', borderRadius: 2, color: '#030301'}} onClick={() => setQty(prevState => prevState+1)} />
        <Button type="link" size="large" style={{flexGrow: 2, background: '#f06543', color: '#FFF'}}>Add 1 to Order <b style={{float: "right", overflow: 'hidden'}}>$9.99</b></Button>
      </div>
    </>
  )
}