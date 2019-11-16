import React,{Component} from 'react';
import { List } from 'antd-mobile';
import imgsrc1 from '../imgs/my_11.jpg';
import imgsrc2 from '../imgs/my_15.jpg';
import imgsrc3 from '../imgs/my_18.jpg';
import imgsrc4 from '../imgs/my_20.jpg';
import imgsrc5 from '../imgs/my_22.jpg';
import imgsrc6 from '../imgs/my_24.jpg';
import imgsrc7 from '../imgs/my_26.jpg';

const Item = List.Item;

export default class AppMy extends Component{
    state = {
        disabled: false,
      }
    render(){
        return (
            <div className='bigbox'>
                <div className='mybox'>
                    <div className='sz'><img src={require('../imgs/my_03.jpg')} className='shezhi'/></div>
                    <img src={require('../imgs/my_06.jpg')} className='tx' />
                    <p className='name'>迈克尔楠楠楠</p>
                    <div className='my'>
                        <div>
                            <p><span style={{fontSize:'20px'}}>0</span>元</p>
                            <p>我的钱包</p>
                        </div>
                        <div>
                            <p><span style={{fontSize:'20px'}}>8</span>个</p>
                            <p>我的红包</p>
                        </div>
                        <div>
                            <p><span style={{fontSize:'20px'}}>2</span>张</p>
                            <p>商家代金券</p>
                        </div>
                    </div>
                </div>

                <div>
                    <List className="my-list">
                        <Item
                        arrow="horizontal"
                        thumb={imgsrc1}
                        multipleLine
                        >我的收货地址</Item>
                        <Item
                        arrow="horizontal"
                        thumb={imgsrc2}
                        multipleLine
                        >我的收藏</Item>
                        <Item
                        arrow="horizontal"
                        thumb={imgsrc3}
                        multipleLine
                        >我的评论</Item>
                        <Item
                        arrow="horizontal"
                        thumb={imgsrc4}
                        multipleLine
                        >我的退款</Item>
                        <Item
                        arrow="horizontal"
                        thumb={imgsrc5}
                        multipleLine
                        >我的消息</Item>
                        <div style={{height:'10px',backgroundColor:'#e5e5e5'}}></div>
                        <Item
                        arrow="horizontal"
                        thumb={imgsrc6}
                        multipleLine
                        >帮助与反馈</Item>
                        <div style={{height:'10px',backgroundColor:'#e5e5e5'}}></div>
                        <Item
                        arrow="horizontal"
                        thumb={imgsrc7}
                        multipleLine
                        >更多</Item>
                    </List>
                </div>

                <div className='phone'>客服电话&nbsp;&nbsp;<span style={{color:'red'}}>400-820-8888</span></div>

            </div>       
        )
    }
}