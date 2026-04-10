import styled from "styled-components";
import { useCategory } from "../../hooks/useCategory";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";

function BooksFilter() {
  const { category } = useCategory();
  const [ searchParams, setSearchParams ] = useSearchParams(); // 상태와 상태 세팅하는 함수

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams); // 기존 검색 파라미터 복사

    if (id === null) {
      newSearchParams.delete(QUERYSTRING.CATEGORY_ID); // category_id 제거
    } else {
      newSearchParams.set(QUERYSTRING.CATEGORY_ID, id.toString()); // category_id 설정
    }

    setSearchParams(newSearchParams); // 새로운 검색 파라미터로 업데이트
  };

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams); // 기존 검색 파라미터 복사

    if (newSearchParams.get(QUERYSTRING.NEWS)) {
      newSearchParams.delete(QUERYSTRING.NEWS); // news 제거
    } else {
      newSearchParams.set("news", "true"); // news 설정
    }
    setSearchParams(newSearchParams); // 새로운 검색 파라미터로 업데이트
  };
    

  return (
    <BooksFilterStyle>
      <div className="category">
        {category.map((item) => (
          <Button size="medium" scheme={item.isActive ? "primary" : "normal"} key={item.category_id} onClick={() => handleCategory(item.category_id)}>
            {item.category_name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button size="medium" scheme="normal" onClick={() => handleNews()}>
          신간
        </Button>
      </div>
    </BooksFilterStyle>
  );
}

const BooksFilterStyle = styled.div`
  display: flex;
  gap: 24px;

  .category {
    display: flex;
    gap: 8px;
  }
`;

export default BooksFilter;