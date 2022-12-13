import React from "react";

import { Stack, Column, Row, Img, Text, Button, List } from "components";

const WwwcarnivorecamaraderiePage = () => {
  function handleNavigate() {
    window.location.href = "www.carnivorecamaraderie.com";
  }

  return (
    <>
      <Stack className="font-poppins h-[5019px] mx-[auto] relative w-[100%]">
        <div className="absolute bg-white_A700 sm:h-[499px] md:h-[644px] h-[982px] top-[0] w-[100%]"></div>
        <Column className="absolute flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[15px] sm:p-[7px] md:p-[9px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1130px] md:ml-[115px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Stack className="h-[114px] relative w-[20%]">
                  <Img
                    src="images/img_633778787e93cd2.png"
                    className="absolute h-[114px] max-w-[100%] w-[100%]"
                    alt="633778787e93cdTwo"
                  />
                </Stack>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:mx-[0] md:p-[16px] p-[25px] sm:px-[15px] sm:py-[12px] sm:w-[100%] w-[63%] common-row-list">
                  <ul className="flex flex-row items-center justify-between">
                    <li className="w-[auto] mt-[22px] mb-[25px] sm:w-[100%] sm:my-[10px] md:mb-[16px] md:mt-[14px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-white_A700"
                        rel="noreferrer"
                      >
                        About
                      </a>
                    </li>
                    <li className="w-[auto] mt-[22px] mb-[25px] sm:w-[100%] sm:my-[10px] md:mb-[16px] md:mt-[14px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-white_A700"
                        rel="noreferrer"
                      >
                        Consultation
                      </a>
                    </li>
                    <li className="w-[auto] mt-[22px] mb-[25px] sm:w-[100%] sm:my-[10px] md:mb-[16px] md:mt-[14px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-white_A700"
                        rel="noreferrer"
                      >
                        Videos
                      </a>
                    </li>
                    <li className="w-[auto] mt-[22px] mb-[25px] sm:w-[100%] sm:my-[10px] md:mb-[16px] md:mt-[14px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-white_A700"
                        rel="noreferrer"
                      >
                        Resources
                      </a>
                    </li>
                    <li className="w-[auto] mt-[22px] mb-[25px] sm:w-[100%] sm:my-[10px] md:mb-[16px] md:mt-[14px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-white_A700"
                        rel="noreferrer"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="w-[auto] mt-[22px] mb-[25px] mr-[1px] sm:w-[100%] sm:my-[10px] md:mb-[16px] md:mt-[14px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-white_A700"
                        rel="noreferrer"
                      >
                        Merch
                      </a>
                    </li>
                  </ul>
                </Row>
              </Row>
            </Row>
          </header>
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Column className="bg-gray_901 flex flex-col items-center justify-end sm:p-[15px] md:p-[32px] p-[50px] w-[100%]">
              <Column className="flex flex-col items-center justify-start max-w-[1130px] ml-[auto] mr-[auto] mt-[15px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Column className="flex flex-col sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] md:px-[3px] px-[5px] sm:w-[100%] w-[49%]">
                    <div className="patreonBtn p-6 text-center line-height max-w-[415px] mb-10 cursor-pointer">
                      <a href="https://www.patreon.com/">
                        <Text className="font-bold text-x text-white">
                          Ex-vegan interviews and other awesome <br /> content
                          weeks before my YouTube channel
                        </Text>
                      </a>
                    </div>
                    <Text
                      className="font-bold md:mt-[3px] sm:mt-[3px] mt-[6px] text-red_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      WELCOME TO
                    </Text>
                    <Text
                      className="leading-[93.60px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[19px] sm:mt-[9px] sm:mx-[0] text-white_A700 sm:w-[100%] w-[97%]"
                      as="h1"
                      variant="h1"
                    >
                      Carnivore Camaraderie.
                    </Text>
                    <Column className="flex flex-col font-oxygen justify-start md:mt-[11px] mt-[17px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                      <Text
                        className="font-normal leading-[28.80px] md:leading-[normal] sm:leading-[normal] not-italic text-white_A700 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Thousands of people every day are physically and
                        mentally benefiting from the Carnivore Diet.
                      </Text>
                      <Text
                        className="font-normal sm:mt-[19px] md:mt-[24px] mt-[38px] not-italic text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Will you be next?
                      </Text>
                    </Column>
                    <Button
                      className="cursor-pointer font-bold min-w-[40%] sm:mt-[17px] md:mt-[22px] mt-[34px] text-[16px] text-center text-white_A700 uppercase w-[max-content]"
                      size="md"
                      variant="GradientRed900Gray902"
                    >
                      Book a Consult
                    </Button>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col font-inter items-center sm:mx-[0] p-[127px] sm:p-[15px] md:p-[83px] sm:w-[100%] w-[49%]"
                    style={{
                      backgroundImage: "url('images/img_spanvideokjr4.png')",
                    }}
                  >
                    <Button
                      className="cursor-pointer font-normal mb-[1px] min-w-[26%] not-italic sm:text-[21px] md:text-[23px] text-[25px] text-center text-white_A700_bf w-[max-content]"
                      shape="RoundedBorder10"
                    >
                      ▶
                    </Button>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default WwwcarnivorecamaraderiePage;
