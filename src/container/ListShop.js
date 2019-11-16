import React,{Component} from 'react';
import {ListView} from 'antd-mobile';

const data = [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      des: '麦当劳餐厅',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      des: '必胜客欢乐餐厅',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      des: '星巴克咖啡厅',
    },
    
  ];
  const NUM_ROWS = 20;
  let pageIndex = 0;
  
  function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
      const ii = (pIndex * NUM_ROWS) + i;
      dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
  }
  

export default class ListShop extends Component{
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
    
        this.state = {
          dataSource,
          isLoading: true,
        };
      }
    
      componentDidMount() {
        setTimeout(() => {
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            Loading: false,
          });
        }, 600);
      }
    
      render() {
        const separator = (sectionID, rowID) => (
          <div
            key={`${sectionID}-${rowID}`}
            style={{
              backgroundColor: '#F5F5F9',
              height: 8,
              borderTop: '1px solid #ECECED',
              borderBottom: '1px solid #ECECED',
            }}
          />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
          if (index < 0) {
            index = data.length - 1;
          }
          const obj = data[index--];
          return (
            <div key={rowID} style={{ padding: '0 15px' }}>  
            {console.log(rowID)}
              <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                <img style={{ height: '85px',marginRight: '15px',borderRadius:'6px' }} src={obj.img} alt="" />
                <div style={{ width:'80%' }}>
                  <span style={{fontSize:'18px',width:'70%' }}>{obj.des}</span>
                  <img src={require('../imgs/colect_06.jpg')} style={{width:'20%',height:'20%',float:'right'}} />
                  <div style={{width:'60%',height:'16px',marginTop:'5px',marginBottom:'5px'}}><img src={require('../imgs/xxin_03.jpg')} style={{width:'100%',height:'100%'}}/></div>
                  <span style={{fontSize:'13px'}}>人均 ￥55&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;起送 ￥50</span>
                  <div style={{height:'5px'}}></div>
                  <span style={{fontSize:'13px'}}>送餐时间：10:00-20:00 </span>
                  <span style={{fontSize:'12px',color:'rgb(196, 193, 193)',float:'right'}}>300m</span><img src={require('../imgs/local_03.jpg')} style={{width:'8%',height:'16%',float:'right'}}/>
                </div>
              </div>
            </div>
          );
        };
        return (
          <ListView
            ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderRow={row}
            renderSeparator={separator}
            className="am-list"
            pageSize={4}
            useBodyScroll
            onScroll={() => { console.log('scroll'); }}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
          />
        );
      }
    
}