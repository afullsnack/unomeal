import {  } from 'react';
import Anchor from 'ui/anchor';
import Row from 'ui/row';
import Col from 'ui/col';
import Button from 'ui/button';
import Modal from 'ui/modal';
import Affix from 'ui/affix';
import withStoreLayout from 'components/store/withStoreLayout';

const { Link } = Anchor;

function storeMenu() {
  
  return (
    <>
      <Row style={{margin: 0, padding: '0 10%'}}>
        <Col span={24}>
          <ul className="menu-nav-container">
            <li className="menu-nav-item">Mega Dish</li>
            <li className="menu-nav-item">Mega Dish</li>
            <li className="menu-nav-item">Mega Dish</li>
            <li className="menu-nav-item">Mega Dish</li>
            <li className="menu-nav-item">Mega Dish</li>
          </ul>
        </Col>
      </Row>
      <style jsx>{`
        ul.menu-nav-container {
          list-style: none;
          list-style-type: none;
          display: inline;
        }

        li.menu-nav-item {
          list-style: none;
          list-style-type: none;
          display: inline-block;
          padding: 10px;
          border-bottom: 4px solid orange;
        }
      `}</style>
    </>
  )
}

export default withStoreLayout(storeMenu);