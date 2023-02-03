import React from "react";
import Panel from "/src/components/ui/panel/panel";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { ProductImage, Price, ContentWrapper, SlideWrapper } from "./styles";
import Tabs from "/src/components/ui/tabs/tabs";
import OptionsList from "/src/components/ui/option-list/option-list";

function ProductCart({ product }) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];

  return (
    <Panel>
      <SlideWrapper>
        <ProductImage src={product.image} />
        <ContentWrapper>
          <Title level={3} size={TitleSize.EXTRASMALL} marginBottom={16}>
            {product.name}
          </Title>
          <Tabs maxContentHeiht="105px" tabsList={tabsList} />
          <Price>
            {product.price} руб. / {product.weight} гр.
          </Price>
        </ContentWrapper>
      </SlideWrapper>
    </Panel>
  );
}

export default ProductCart;
