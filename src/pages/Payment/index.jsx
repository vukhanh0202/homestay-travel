import 'antd/dist/antd.css';
import React, { useState } from 'react';
import './styles.scss';
import { Steps } from 'antd';
import 'antd/dist/antd.css';
import MethodPayment from './components/MethodPayment';
import Momo from './components/Momo';
import Banking from './components/Banking';
import WaitingConfirm from './components/WaitingConfirm';
import Success from './components/Success';
import { useEffect } from 'react';

const { Step } = Steps;

function Payment(props) {
    const [current, setCurrent] = useState(0)
    const [element, setElement] = useState(<MethodPayment />)
    const [method, setMethod] = useState(<MethodPayment />)
    const onChange = currentChange => {
        if (currentChange === 0 && current === 1) {
            setCurrent(currentChange);
            setMethod(null);
        }
    };
    const payment = JSON.parse(localStorage.getItem('PAYMENT'));
    useEffect(() => {
        if (current === 0) {
            setElement(<MethodPayment onSelectMethod={onSelectMethod} />)
        } else if (current === 1) {
            console.log(method);
            if (method === 'MOMO') {
                setElement(<Momo setCurrent={setCurrent} payment={payment} />)
            } else if (method === 'BANKING') {
                setElement(<Banking setCurrent={setCurrent} payment={payment} />)
            }
        } if (current === 2) {
            setElement(<WaitingConfirm method={method} setCurrent={setCurrent} payment={payment} />)
        } if (current === 3) {
            setElement(<Success />)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])
    const onSelectMethod = (methodSelected) => {
        setCurrent(methodSelected.current);
        setMethod(methodSelected.method);
    }
    return (
        <div className="payment-wrapper container">
            <Steps
                type="navigation"
                current={current}
                progressDot={false}
                onChange={onChange}
                className="site-navigation-steps"
                percent={60}
            >
                <Step status={current === 0 ? 'process' : current < 0 ? 'wait' : 'finish'} title="Chọn phương thức thanh toán"></Step>
                <Step status={current === 1 ? 'process' : current < 1 ? 'wait' : 'finish'} title="Thanh toán" />
                <Step status={current === 2 ? 'process' : current < 2 ? 'wait' : 'finish'} title="Xác thực" />
                <Step status={current === 3 ? 'finish' : current < 3 ? 'wait' : 'finish'} title="Thanh toán thành công" />
            </Steps>
            {element}
        </div>
    );
}

export default Payment;