import React, {useState} from 'react';
import { Form, Container, Row, Col, FormGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Category.css';

const Category = () => {

  const [selections, setSelections] = useState({
    catalogue: '4',
    weightShape: '4',
    sizeDifference: '4',
    basketDesign: '4',
    basketHeight: '4',
    shoulder: '4',
    shank: '4',
    accentedStone: '4',
    design: '4',
    thickness: '4',
    width: '4',
    sku:'4'
  });

  const handleSelectionChange = (e) => {
    const { name, value } = e.target;
    setSelections({
      ...selections,
      [name]: value,
    });
  };

  const calculateLowestValue = () => {
    const values = Object.values(selections).map(Number);
    const lowestValue = Math.min(...values);
    alert(`Đơn hàng loại ${lowestValue}`);
  };

  const dropdownOptions = {
    catalogue: [
      { value: 1, label: 'Mẫu hoàn toàn mới' },
      { value: 2, label: 'Theo catalogue với chỉnh sửa nhiều' },
      { value: 3, label: 'Theo catalogue với chỉnh sửa nhẹ' },
      { value: 4, label: 'Theo catalogue' },
    ],
    weightShape: [
      { value: 2, label: 'Thuộc thông số GIA-lớn' },
      { value: 3, label: 'Nhỏ hơn thông số GIA-lớn/Thay đổi shape viên chủ' },
      { value: 4, label: 'Giữ nguyên mẫu'}
    ],
    sizeDifference: [
      { value: 2, label: 'Lớn hơn 1.5mm' },
      { value: 3, label: 'Nhỏ hơn hoặc bằng 1.5mm' },
      { value: 4, label: 'Giữ nguyên mẫu'}

    ],
    basketDesign: [
      { value: 2, label:'Thay đổi kiểu chấu chủ'},
      { value: 2, label:'Kiểu chấu đặc biệt như Tension, Flower Basket'},
      { value: 2, label:'Có 6 chấu với thay đổi viên chủ lớn hơn 1mm'},
      { value: 4, label: 'Giữ nguyên mẫu'}
    ],
    basketHeight: [
      { value: 2, label: 'Lớn hơn 2mm' },
      { value: 3, label: 'Nhỏ hơn hoặc bằng 2mm' },
      { value: 4, label: 'Giữ nguyên mẫu'}
    ],
    shoulder: [
      {value: 2, label: 'Thay đổi kiểu đính tấm'},
      { value: 4, label: 'Giữ nguyên mẫu'}
    ],
    shank: [
      {value: 2, label: 'Thay đổi kiểu đính tấm'},
      { value: 4, label: 'Giữ nguyên mẫu'}
    ],
    accentedStone:[

    ],
    design: [
      {value: 2, label:'Kết hợp nhiều hơn 2 thiết kế/Bề mặt gia công phức tạp'},
      {value: 3, label:'Kết hợp 2 thiết kế/Loại bớt chi tiết'},
      {value: 4, label:'Giữ nguyên mẫu'}
    ],
    thickness: [
      {value: 2, label:'Độ dày nhẫn chênh lệch lớn hơn khoảng 0.3mm'},
      {value: 3, label:'Độ dày nhẫn chênh lệch nhỏ hơn hoặc bằng khoảng 0.3mm'},
      {value: 4, label:'Giữ nguyên mẫu'}
    ],
    width: [
      {value: 2, label:'Độ rộng nhẫn chênh lệch lớn hơn khoảng 1mm'},
      {value: 3, label:'Độ rộng nhẫn chênh lệch nhỏ hơn hoặc bằng khoảng 1mm'},
      {value: 4, label:'Giữ nguyên mẫu'}
    ],
    sku: [
      {value: 1, label: 'Thiết kế từ BP PTSP/hoa văn phức tạp'},
      {value: 2, label: 'VTA'},
      {value: 3, label: 'NKC'},
      {value: 4, label:'Giữ nguyên mẫu'}
    ]

  };

  return (
    <Container>
      <Row className="form-row">
        <Col className="grid-item">
          <Form.Group controlId="catalogue">
            <Form.Label>Catalogue</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.catalogue}
                onChange={handleSelectionChange}>
              {dropdownOptions.catalogue.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="grid-item">
          <Form.Group controlId="weightShape">
            <Form.Label>Trọng lượng và Shape viên chủ</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.weightShape}
                onChange={handleSelectionChange}>
              {dropdownOptions.weightShape.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="grid-item">
          <Form.Group controlId="sizeDifference">
            <Form.Label>Chênh lệch kích thước viên chủ</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.sizeDifference}
                onChange={handleSelectionChange}>
              {dropdownOptions.sizeDifference.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col className='grid-item'>
         <Form.Group controlId='basketDesign'>
            <Form.Label>Kiểu dáng ổ chấu</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.basketDesign}
                onChange={handleSelectionChange}>
            {dropdownOptions.basketDesign.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </Form.Control>
         </Form.Group>
        </Col>
        <Col className='grid-item'>
         <Form.Group controlId='basketHeight'>
            <Form.Label>Chênh lệch chiều cao ổ chấu</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.basketHeight}
                onChange={handleSelectionChange}>
            {dropdownOptions.basketHeight.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </Form.Control>
         </Form.Group>
        </Col>
        <Col className="grid-item">
         <Form.Group controlId='shoulder'>
            <Form.Label>Vai nhẫn</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.shoulder}
                onChange={handleSelectionChange}>
            {dropdownOptions.shoulder.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </Form.Control>
         </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col className="grid-item">
         <Form.Group controlId='shank'>
            <Form.Label>Thân/Đáy nhẫn</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.shank}
                onChange={handleSelectionChange}>
            {dropdownOptions.shank.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </Form.Control>
         </Form.Group>
        </Col>
        <Col className="grid-item">
         <Form.Group controlId='design'>
            <Form.Label>Đặc trưng thiết kế</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.design}
                onChange={handleSelectionChange}>
            {dropdownOptions.design.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </Form.Control>
         </Form.Group>
        </Col>
        <Col className="grid-item">
         <Form.Group controlId=''>
            <Form.Label>Đá tấm</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.accentedStone}
                onChange={handleSelectionChange}>
            {dropdownOptions.catalogue.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            </Form.Control>
         </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col className="grid-item">
          <Form.Group controlId='width'>
            <Form.Label>Độ dày nhẫn</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.width}
                onChange={handleSelectionChange}>
              {dropdownOptions.width.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="grid-item">
          <Form.Group controlId='thickness'>
            <Form.Label>Độ rộng nhẫn</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.thickness}
                onChange={handleSelectionChange}>
              {dropdownOptions.thickness.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col className="grid-item">
          <Form.Group controlId='sku'>
            <Form.Label>Yếu tố đặc biệt</Form.Label>
            <Form.Control as="select" defaultValue={4} value={selections.sku}
                onChange={handleSelectionChange}>
              {dropdownOptions.sku.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" onClick={calculateLowestValue}>
          CALCULATE
        </Button>
    </Container>
  );
};

export default Category;