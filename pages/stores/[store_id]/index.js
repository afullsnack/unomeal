import {  } from 'react';
import Row from 'ui/row';
import Col from 'ui/col';
import Card from 'ui/card';
import Radio from 'ui/radio';
import Button from 'ui/button';
import Select from 'ui/select';
import withStoreLayout from 'components/store/withStoreLayout';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const { Option } = Select;

function StoreIndex({store_id}) {

  console.assert(store_id != 'undefined' || store_id != null, 'Store ID does not exist');
  console.log(store_id);
  return (
    <>
      <div style={{
        position: 'absolute',
        // width: '100%',
        top: 0,
        left: 6,
        right: 6,
        height: '50%',
        backgroundImage: "url('/rice/chinese-fried-rice.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: 5,
      }}></div>

      <Row style={{margin: 0, padding: 0}}>
        <Col xs={{span: 0}} sm={{span: 1}} md={{span: 2}} lg={{span: 3}} xl={{span: 4}}></Col>
        <Col xs={{span: 24}} sm={{span: 22}} md={{span: 20}} lg={{span: 18}} xl={{span: 16}}>
          <Row style={{margin: 0, padding: 0, marginTop: '20%', boxShadow: '0px 6px 10px rgba(0,0,0,.3)'}}>
            <Col xs={{span: 24}} sm={{span: 24}} lg={{span: 12}} xl={{span: 12}}>
              <Card bordered={false} bodyStyle={{textAlign: 'center'}}>
                <h2>Choose Order Type</h2><br/>
                <Radio.Group defaultValue={1}>
                  <Radio value={1}>Pickup</Radio>
                  <Radio value={2}>Delivery</Radio>
                </Radio.Group>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                  <Select defaultValue="jack" style={{ width: 160, marginRight: 10, color: '#ff3562' }} size="large">
                    <Option value="jack">1:05PM (ASAP)</Option>
                    <Option value="lucy">2:00PM</Option>
                    <Option value="disabled">2:30PM</Option>
                    <Option value="Yiminghe">3:00PM</Option>
                  </Select>
                  <Button type="link" size="large" style={{background: '#ff3562', color: 'white'}}>Start Order</Button>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '20px 0',
                }}>
                  <Link href={`./${store_id}/menu`}><a style={{color: '#ff3562', padding: 10}}>View menu</a></Link> <b>or</b> <Button type="link" style={{color: '#ff3562'}}>Buy gift card</Button>
                </div>
              </Card>
            </Col>
            <Col xs={{span: 24}} sm={{span: 24}} lg={{span: 12}} xl={{span: 12}}>
              <Card bordered={false} style={{background: '#ff3562', height: '100%'}}></Card>
            </Col>
          </Row>
          <Row gutter={16} style={{margin: 0, padding: 0, marginTop: 60}}>
            <Col xs={{span: 24}} sm={{span: 24}} lg={{span: 12}} xl={{span: 12}}>
              <Card title="Location" bordered={false}>
                <p>Long store address, full</p>
                <p><Link href="#" passHref><a style={{color: '#ff3562'}}>Driving Directions</a></Link> / <b>1.36mi</b></p>
                <p><b>(535) 512 873</b></p>
              </Card>
            </Col>
            <Col xs={{span: 24}} sm={{span: 24}} lg={{span: 12}} xl={{span: 12}}>
              <Card title="Today's Hours" bordered={false}>
                <p>Pickup <b style={{float: 'right', overflow: "hidden"}}>10:00am - 9:00pm</b></p>
                <p>Delivery <b style={{float: 'right', overflow: "hidden"}}>11:00am - 8:00pm</b></p>
                <p><Link href="#" passHref><a style={{color: '#ff3562'}}>See Full Schedule</a></Link></p>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={{span: 0}} sm={{span: 1}} md={{span: 2}} lg={{span: 3}} xl={{span: 4}}></Col>
        <style jsx global>{`
          .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
            border: 1px solid #ff3562;
          }
        `}</style>
      </Row>
    </>
  )
}


export async function getServerSideProps ({ params }) {

  const { store_id } = params;
  return { props: { store_id } }

}

export default withStoreLayout(StoreIndex);