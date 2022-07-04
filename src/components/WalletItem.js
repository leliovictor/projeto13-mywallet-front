import styled from "styled-components";

export default function WalletItem({ date, description, value, type }) {
  function deleteValue() {
    alert("tentando deletar");
  }

  function editValue() {
    alert("Tentando editar");
  }

  return (
    <Content>
      <Date>{date}</Date>
      <Description onClick={() => editValue()}>{description}</Description>
      <Value type={type}>{String(value).replace(".", ",")}</Value>
      <EditItem onClick={() => deleteValue()}>X</EditItem>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  height: 35px;
  font-size: 16px;
  line-height: 19px;

  display: flex;
  align-items: center;
`;

const Date = styled.p`
  color: #c6c6c6;
  margin-right: 5px;
`;

const Description = styled.p`
  color: #000000;
  width: 100%;
  margin-right: 5px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Value = styled.p`
  text-align: right;
  margin-right: 10px;
  color: ${(props) => (props.type === "debit" ? "#03AC00" : "#C70000")};
`;

const EditItem = styled.p`
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #c6c6c6;
`;
