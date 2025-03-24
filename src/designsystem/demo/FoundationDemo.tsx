import React from "react";
import {
  fontFamilyList,
  textTypes,
} from "@designsystem/foundation/text/TextType";
import { css } from "styled-components";
import View from "@designsystem/core/View";
import { Column, Row } from "@designsystem/core/FlexLayout";
import Text from "@designsystem/component/Text";

function FoundationDemo() {
  return (
    <Column
      $gap={20}
      $ui={css`
        padding: 20px;
      `}
    >
      <Column>
        {textTypes.map((type) => (
          <>
            <Text type={type}>가나다라마바사ABCDEFG</Text>
            <Text type={type} bold={true}>
              가나다라마바사ABCDEFG
            </Text>
          </>
        ))}
      </Column>
      <Column $gap={20}>
        {fontFamilyList.map((font) => (
          <Row>
            <Text
              type={"b2"}
              ui={css`
                width: 256px;
              `}
            >
              {font}
            </Text>
            <Column>
              <Text type={"h3"} weight={100} font={font}>
                가나다라마바사ABCDEFG
              </Text>
              <Text type={"h3"} weight={500} font={font}>
                가나다라마바사ABCDEFG
              </Text>
              <Text type={"h3"} weight={700} font={font}>
                가나다라마바사ABCDEFG
              </Text>
            </Column>
          </Row>
        ))}
      </Column>
      <View
        $ui={css`
          display: flex;
          flex-wrap: wrap;
          width: 256px;
        `}
      ></View>
    </Column>
  );
}

export default FoundationDemo;
