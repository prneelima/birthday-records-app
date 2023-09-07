import React, {useState} from 'react';
import { Form } from 'react-bootstrap';
import WithForm from '../../hoc/WithForm';
import ButtonComponent from './ButtonComponent';

const FormComponent = ({addBirthday}) => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');


    const handleSubmit = (btnName) => {
        if(btnName === 'add'){
          const birthday = {
          id: Date.now(),
          name,
          date,
        };
        addBirthday(birthday);
        setName('');
        setDate('');
      }
    };

    return (
        <div>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='formClass'> Name:
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Label>
                <Form.Label className='formClass'>
                    Date: <Form.Control type="text" value={date} onChange={(e) => setDate(e.target.value)} />
                </Form.Label>
                <ButtonComponent ButtonName={'add'} btnClick={handleSubmit} ButtonText={'Add'} />
            </Form.Group>
        </Form>

        </div>
    )
}

export default WithForm(FormComponent);