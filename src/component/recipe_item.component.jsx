import React, { useEffect, useState } from "react";
import "./recipe_item.component.scss";
import { DownOutlined, PlusCircleFilled, RestFilled } from "@ant-design/icons";
import { Button, Dropdown, Input, Modal, Space } from "antd";
import { categoryDrop, create } from "../service/recipe.service";
import { async } from "rxjs";
import { useNavigate } from "react-router-dom";

const RecipeItemComponent = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [ea, setEa] = useState("");
  const [unit, setUnit] = useState("");

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  //모달창 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  //모달창 보여주기
  const showModal = () => {
    setIsModalOpen(true);
  };
  //모달창 닫기
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //카텔고리 드롭다운 관리

  //   useEffect(() => {
  //     categoryDrop()
  //       .then(function () {})
  //       .catch(function () {});
  //   });
  const items = [
    {
      label: "제과",
      key: "0",
    },
    {
      label: "제빵",
      key: "1",
    },
    {
      label: "3rd menu item",
      key: "2",
    },
  ];

  //레시피 등록 이벤트
  const recipeCreate = () => {
    const recipeParam = {
      name: recipeName,
      ingredientList,
    };

    create(recipeParam)
      .then(function (response) {
        console.log("성공", response);
        setIsModalOpen(false);
        navigate("/");
      })
      .catch(function (error) {
        console.log("error: ", error);
        alert("등록되어있는이름입니다!");
      });
  };

  //재료 추가 핸들러

  const [ingredientList, setIngredientList] = useState([
    { name: "", ea: 0, unit: "" },
  ]);

  const ingredientChange = (value, index) => {
    ingredientList[index].name = value;
    setIngredientList([...ingredientList]);
  };

  const eaChange = (value, index) => {
    ingredientList[index].ea = value;
    setIngredientList([...ingredientList]);
  };

  const unitChange = (value, index) => {
    ingredientList[index].unit = value;
    setIngredientList([...ingredientList]);
  };
  return (
    <>
      <div className="recipe__item">
        <PlusCircleFilled onClick={showModal} className="recipe__item-add" />
      </div>
      <Modal
        className="modal"
        width={970}
        title=""
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <div className="modal__feild">
          <div className="modal__title modal__size">
            <Input
              type="text"
              onChange={(e) => {
                setRecipeName(e.target.value);
              }}
              placeholder="레시피 이름"
            ></Input>
          </div>
          <div className="modal__category modal__size">
            <div>카테고리</div>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Space>
                제과
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>

          {ingredientList.map((ingredient, index) => (
            <div key={index} className="modal__ingredient modal__size">
              <div className="modal__ingredient__title">
                <div>재료명</div>
                <Input
                  type="text"
                  value={ingredient.name}
                  onChange={(e) => ingredientChange(e.target.value, index)}
                  placeholder="재료명 입력"
                ></Input>
              </div>
              <div className="modal__ingredient__ea">
                <div>무게/수량</div>
                <Input
                  type="text"
                  value={ingredient.ea}
                  onChange={(e) => {
                    eaChange(e.target.value, index);
                  }}
                  placeholder="무게/수량 입력"
                ></Input>
              </div>
              <div className="modal__ingredient__unit">
                <div>단위</div>
                <Input
                  type="text"
                  value={ingredient.unit}
                  onChange={(e) => {
                    unitChange(e.target.value, index);
                  }}
                  placeholder="단위 입력"
                ></Input>
              </div>
              <Button className="modal__ingredient__delete_button">
                재료 삭제
              </Button>
            </div>
          ))}

          <Button
            className="modal__add modal__size"
            onClick={() =>
              setIngredientList([
                ...ingredientList,
                { name: "", ea: 0, unit: "" },
              ])
            }
          >
            재료추가
          </Button>
          <div className="modal__util modal__size">
            <Button onClick={handleCancel}>취소</Button>
            <Button onClick={recipeCreate}>등록</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RecipeItemComponent;
