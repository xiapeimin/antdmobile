import React,{Component} from 'react';
import {NavBar,Carousel,Grid,WingBlank} from 'antd-mobile';

const gridArr = [
    '餐饮','超市购','骑手专送','家常菜','品牌馆','新店特惠','水果生鲜','质享生活','商务快餐','土豪特供'
]
const griddata = gridArr.map((_val, i) => ({
    icon: require(`../imgs/grid${i+1}.jpg`),
    text:_val,
}));
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
        <div className='xyx1'><img src={require('../imgs/xyx_03.jpg')}/></div>
        <div className='xyx2'>
            <p style={{fontSize:"17px",marginBottom:"6px",marginTop:"0"}}>鲜芋仙 (海悦天地店)</p>
            <div style={{height:'20px'}}>
            <div style={{float:'left',width:'28%',marginTop:'3px'}}><img src={require('../imgs/xyx_06.jpg')} style={{width:'100%'}}/></div>
            <span style={{fontSize:'13px'}}>月售 226份 </span>
            <p style={{float:'right',fontSize:'10px',marginTop:'3px'}}>32分钟</p></div>
            <p style={{fontSize:'14px',marginTop:'5px'}}>起送 ￥20 | 配送 ￥4</p>
            <p style={{fontSize:'10px',float:'right',marginTop:'-27px'}}>1.2千米</p>
        </div>
        <div className='xyx3'>
            <div className='xyx3_1'>
                <img src={require('../imgs/xyx_10.jpg')} className="tb"/> 
                <span style={{lineHeight:'25px'}}>新用户立减19元(限时钱包支付,其他支付立减9元)</span>
                
            </div>
            <div className='xyx3_1'>
                <img src={require('../imgs/xyx_13.jpg')} className="tb"/> 
                <span>满20减4元，满30减6元，满50减9元</span>
            </div>
        </div>
    </div>
);
  

export default class Apphome extends Component{    
    state = {
        data: ['1', '2', '3','4'],
        imgHeight: 176,
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['1', '2', '3','4'],
            });
        }, 100);
    }

    render() {
        return (
            <div>
                <NavBar style={{background:'#bc0400'}} 
                leftContent={<select className='sel'>
                    <option value ="volvo">石家庄</option>
                    <option value ="saab">北京</option>
                    <option value="opel">长沙</option>
                </select>}
                rightContent={<img src={require('../imgs/narimg.jpg')} className='narimg'/>}>
                    <div className='narbox'>
                        <div className='searchbox'>
                            <div><img src={require('../imgs/search.png')} /></div>
                            <input type='text' name='movie' className='search' value='搜索商家、品类或商圈'/>
                        </div>
                    </div>
                </NavBar>

                <Carousel
                    autoplay
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href=""
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                src={require(`../imgs/lunbo${val}.jpg`)}
                                alt=""
                                style={{ width: '100%',verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}/>
                            </a>
                        ))}
                </Carousel>

                <div className='gridbox'>
                    <Grid data={griddata} columnNum='5' hasLine={false} isCarousel={true} autoplay={false} />
                </div>

                <div style={{width:'100%',height:'10px',backgroundColor:'#e5e5e5'}}></div>
                <div className='spe'>
                    <div className='spe01'>
                        <span className='p1' style={{paddingTop:'10px',paddingBottom:'2px'}}>超值购菜品</span>
                        <span className='p2' style={{paddingBottom:'6px'}}>劲爆折扣专区</span>
                        <div className='redback'>美食专区</div>
                        <img src={require('../imgs/spe1.jpg')} className='speimg' style={{paddingTop:'7px'}}/>
                    </div>
                    <div className='spe02'>
                        <div className='spe02_1'>
                            <div className='wuxing1'>
                                <span className='p1' style={{paddingTop:'10px',paddingBottom:'2px'}}>五星好评店</span>
                                <span className='p2' style={{paddingBottom:'6px'}}>好评餐馆排行榜</span>
                                <p className='redback' style={{width:'80%'}}>不排队的人气美食</p>
                            </div>
                            <div className='wuxing2'><img src={require('../imgs/spe2.jpg')} className='speimg2' style={{paddingTop:'10px'}}/></div>
                        </div>
                        <div className='spe02_2'>
                            <div style={{width:'60%',height:'100%',marginLeft:'20%',textAlign:'center'}}>
                            <span  className='p1' style={{fontSize:'12px',paddingTop:'5px'}}>天天满减</span>
                            <span className='p3'>每天都有新优惠</span>
                            <img src={require('../imgs/spe4.jpg')} className='speimg'/>
                            </div>
                        </div>
                        <div className='spe02_3'>
                            <span className='p1' style={{fontSize:'12px',paddingTop:'5px'}}>新店尝鲜</span>
                            <span className='p3'>每天都有新优惠</span>
                            <img src={require('../imgs/spe3.jpg')} className='speimg'/>
                        </div>
                    </div>
                    
                </div>

                <div style={{width:'100%',height:'23px',lineHeight:'25px',backgroundColor:'#e5e5e5'}}>
                    <select className='sel2'>
                        <option value ="volvo">商家分类</option>
                        <option value ="saab">类别1</option>
                        <option value="opel">类别2</option>
                    </select>
                    <select className='sel3'>
                        <option value ="volvo">排序</option>
                        <option value ="saab">时间</option>
                        <option value="opel">距离</option>
                    </select>
                </div>

                <div style={{ padding: '15px 0',backgroundColor:'#fff'}}>
                    <WingBlank><PlaceHolder /></WingBlank>
                    <WingBlank><PlaceHolder /></WingBlank>
                </div>
            </div>
        )
    }
}