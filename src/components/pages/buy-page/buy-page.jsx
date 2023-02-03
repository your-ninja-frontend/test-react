import React, { useState } from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Panel from "/src/components/ui/panel/panel";
import Button from "/src/components/ui/button/button";
import ProductCart from "/src/components/ui/product-cart/product-cart";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import {
  StyledBuyPage,
  StyledBuyPageWrapper,
  LeftColumn,
  InputForAddres,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxForProduct
} from "./styles";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

const BuyPage = ({ products }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);
  //id в продукты
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  //цена покупки
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  const [address, setAddress] = useState("");
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return products && products.length ? (
    <StyledBuyPage as="form">
      <StyledBuyPageWrapper>
        <LeftColumn>
          <Panel marginBottom={18} paddingTop={24} paddingBottom={12}>
            <Title level={2} size={TitleSize.DEFAULT} marginBottom={12}>
              Выберите продукты
            </Title>
            <CheckboxList
              labelComponent={CheckboxForProduct}
              name={"select-products"}
              options={products.map((product) => ({
                value: product.id,
                title: product.name
              }))}
              selectValues={selectProductIds}
              onChange={setSelectProductIds}
              onClickLabel={handleOnClickProduct}
            />
          </Panel>
          <Panel>
            <Title size={TitleSize.DEFAULT} marginBottom={24}>
              Сделать заказ
            </Title>
            <InputForAddres
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Введите адрес доставки"
            />
            <PriceLabel $marginBottom={8}>Цена</PriceLabel>
            <PriceValue value={fullPrice} />
            <Button
              maxWidth
              paddingTop={17}
              paddingBottom={17}
              onClick={handleBuyClick}
              disabled={!(selectProductIds.length && address)}
            >
              Купить
            </Button>
          </Panel>
        </LeftColumn>
        <ProductSwiper
          onSwiper={setSwiperRef}
          spaceBetween={12}
          direction="vertical"
          slidesPerView="auto"
          scrollbar={{ draggable: true }}
          mousewheel
          pagination={{
            type: "fraction"
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCart product={product} />
            </SwiperSlide>
          ))}
        </ProductSwiper>
      </StyledBuyPageWrapper>
    </StyledBuyPage>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
};

export default BuyPage;
