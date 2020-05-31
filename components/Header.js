import { Compoennt } from 'react';
import { ShoppingOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Badge from 'antd/lib/badge';


function HeadItems(props) {
   return (
      <div style={{
         display: 'flex',
         flexFlow: 'row',
         alignItems: 'center',
         justifyContent: 'end',
         padding: 10
      }}>
         <Badge count={2}>
            <ShoppingOutlined style={{color: 'white', fontSize: 24}} />
         </Badge>
      </div>
   )
}

export default HeadItems;