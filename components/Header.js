import { Compoennt } from 'react';
import { ShoppingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Badge from 'antd/lib/badge';
import Link from 'next/link';


function HeadItems(props) {
   return (
      <Link href="/cart" as="/cart" passHref>
         <div style={{
            display: 'flex',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'end',
            padding: 10,
            cursor: 'pointer'
         }}>
            <Badge count={props.cartTotalQty}>
               <ShoppingOutlined style={{color: 'white', fontSize: 24 }} />
            </Badge>
         </div>
      </Link>
   )
}

export default HeadItems;