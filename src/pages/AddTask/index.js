import React from "react";

import {
  Column,
  Row,
  Image,
  Stack,
  Button,
  Text,
  Line,
  Input,
  List,
} from "components";

const AddTaskPage = () => {
  return (
    <>
      <Column className="bg-gray_900_99 font-sourcesanspro mx-[auto] w-[100%]">
        <Row className="items-center justify-evenly w-[100%]">
          <aside className="items-center lg:pb-[30px] xl:pb-[34px] pb-[39px] 3xl:pb-[46px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
            <Column className="">
              <Image
                src={"images/img_group.svg"}
                className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
                alt="Group"
              />
              <Image
                src={"images/img_frame407.svg"}
                className="3xl:h-[1075px] lg:h-[697px] xl:h-[797px] h-[895px] 2xl:h-[896px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] object-contain w-[51%]"
                alt="Frame407"
              />
            </Column>
          </aside>
          <Stack className="h-[1040px] 2xl:h-[1041px] 3xl:h-[1249px] lg:h-[809px] xl:h-[926px] w-[93%]">
            <Stack className="absolute h-[1040px] 2xl:h-[1041px] 3xl:h-[1249px] lg:h-[809px] xl:h-[926px] inset-[0] w-[100%]">
              <div className="absolute bg-white_A700 border border-indigo_50 border-solid lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-x-[0] top-[0] w-[100%]"></div>
              <Row className="absolute bg-gray_100 border border-indigo_50 border-solid inset-x-[0] items-center justify-start lg:pr-[626px] xl:pr-[717px] pr-[806px] 3xl:pr-[967px] top-[7%] w-[100%]">
                <Button className="bg-white_A700 border border-indigo_50 border-solid font-normal not-italic lg:pb-[15px] xl:pb-[17px] pb-[19.5px] 2xl:pb-[19px] 3xl:pb-[23px] lg:pt-[14px] xl:pt-[16px] pt-[18.5px] 2xl:pt-[18px] 3xl:pt-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-blue_800 text-center w-[14%]">{`Activities Dashboard`}</Button>
                <Button className="border border-gray_200 border-solid font-normal mb-[1px] not-italic lg:py-[14px] xl:py-[16px] py-[18.5px] 2xl:py-[18px] 3xl:py-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 text-center w-[7%]">{`Analytics`}</Button>
                <div className="w-[14%] input-wrap">
                  <Image
                    src={"images/img_vector.svg"}
                    className="absolute z-[1] h-[16.01px] right-[20px] lg:h-[13px] lg:right-[15px] xl:h-[15px] xl:right-[17px] 2xl:h-[17px] 3xl:h-[20px] 3xl:right-[24px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                  <Button className="border border-gray_200 border-solid font-normal not-italic lg:pb-[15px] xl:pb-[17px] pb-[19.5px] 2xl:pb-[19px] 3xl:pb-[23px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[56px] xl:pr-[64px] pr-[72.02px] 2xl:pr-[72px] 3xl:pr-[86px] lg:pt-[14px] xl:pt-[16px] pt-[18.5px] 2xl:pt-[18px] 3xl:pt-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_700 text-left w-[100%]">{`Sales Dashboard`}</Button>
                </div>
                <Image
                  src={"images/img_frame418.svg"}
                  className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] object-contain lg:w-[43px] xl:w-[49px] w-[56px] 3xl:w-[67px]"
                  alt="Frame418"
                />
              </Row>
              <Column className="absolute bg-white_A700 bottom-[0] items-start justify-start lg:pb-[34px] xl:pb-[39px] pb-[44px] 3xl:pb-[52px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] right-[1%] rounded-radius8 w-[32%]">
                <Column className="items-center w-[100%]">
                  <Row className="items-start justify-between mx-[auto] w-[92%]">
                    <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`My calender`}</Text>
                    <Image
                      src={"images/img_settingoutline.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:ml-[234px] xl:ml-[267px] ml-[301px] 3xl:ml-[361px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="settingOutline"
                    />
                  </Row>
                  <Line className="bg-bluegray_50 h-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]" />
                </Column>
                <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`Today`}</Text>
                <Column className="items-center lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:px-[13px] xl:px-[15px] px-[17px] 3xl:px-[20px] w-[100%]">
                  <Row className="items-start justify-start mx-[auto] w-[92%]">
                    <Text className="font-semibold mt-[1px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 text-left w-[auto]">{`27 Jun`}</Text>
                    <Image
                      src={"images/img_group61.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] object-contain w-[14%]"
                      alt="Group61"
                    />
                    <Text className="font-normal lg:ml-[154px] xl:ml-[177px] ml-[199px] 3xl:ml-[238px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 text-right w-[auto]">{`Show today`}</Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] mx-[auto] w-[92%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[auto]">{`08:00`}</Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[88%]" />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] w-[92%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[auto]">{`09:00`}</Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[88%]" />
                  </Row>
                </Column>
                <Column className="items-end lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:pl-[51px] xl:pl-[58px] pl-[66px] 3xl:pl-[79px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] w-[100%]">
                  <Line className="bg-red_700 h-[1px] w-[80%]" />
                </Column>
                <Column className="items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]">
                  <Row className="items-center justify-evenly lg:px-[14px] xl:px-[16px] px-[18px] 3xl:px-[21px] w-[100%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[auto]">{`10:00`}</Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[80%]" />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] w-[92%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[auto]">{`11:00`}</Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[88%]" />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] w-[92%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[auto]">{`12:00`}</Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[88%]" />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] w-[92%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[auto]">{`13:00`}</Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[88%]" />
                  </Row>
                  <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] mt-[50px] 3xl:mt-[60px] mx-[auto] w-[92%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-center w-[auto]">{`14:00`}</Text>
                    <Line className="bg-bluegray_100 h-[1px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[88%]" />
                  </Row>
                </Column>
              </Column>
              <Column className="absolute bg-white_A700 h-[max-content] inset-y-[0] my-[auto] right-[0] w-[60%]">
                <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-between lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                  <Text className="font-normal mb-[1px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_900 text-left w-[auto]">{`Add task`}</Text>
                  <Image
                    src={"images/img_multiplyoutlin.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[534px] xl:ml-[611px] ml-[687px] 3xl:ml-[824px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="multiplyOutlin"
                  />
                </Row>
                <Row className="items-start justify-end lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] w-[100%]">
                  <Column className="items-start justify-start lg:mb-[304px] xl:mb-[348px] mb-[392px] 3xl:mb-[470px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[60%]">
                    <Input
                      className="bg-bluegray_50 placeholder:bg-transparent border-0 font-normal not-italic lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] lg:py-[14px] xl:py-[16px] py-[18.5px] 2xl:py-[18px] 3xl:py-[22px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] placeholder:text-bluegray_900 text-bluegray_900 text-left w-[100%]"
                      name="Mark as complet"
                      placeholder={`Mark as completed`}
                    ></Input>
                    <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">
                      <span className="text-black_900 font-sourcesanspro">
                        <>{`Title `}</>
                      </span>
                      <span className="text-red_700 font-sourcesanspro">
                        <>{`*`}</>
                      </span>
                    </Text>
                    <Column className="xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]">
                      <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-between xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[9px] lg:py-[5px] xl:py-[6px] py-[7px] 3xl:py-[8px] rounded-radius4 w-[100%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_200 text-left w-[auto]">{`Enter title of task`}</Text>
                        <Image
                          src={"images/img_multiplysolid.svg"}
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[264px] xl:ml-[302px] ml-[340px] 3xl:ml-[408px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                          alt="multiplySolid"
                        />
                      </Row>
                    </Column>
                    <Text className="font-normal lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">{`Description`}</Text>
                    <Input
                      className="placeholder:bg-transparent bg-white_A700 border border-bluegray_100 border-solid font-normal xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:pb-[30px] xl:pb-[34px] pb-[39px] 3xl:pb-[46px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                      name="Start typing th"
                      placeholder={`Start typing the details about the task`}
                    ></Input>
                    <Column className="lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <List
                          className="lg:gap-[18px] xl:gap-[21px] gap-[24.000015px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-2 min-h-[auto] w-[65%]"
                          orientation="horizontal"
                        >
                          <Column className="items-start justify-start w-[100%]">
                            <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">{`Task Type`}</Text>
                            <Column className="xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]">
                              <Row className="border border-gray_200 border-solid items-center justify-between lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[16px] xl:pr-[19px] pr-[21.66px] 2xl:pr-[21px] 3xl:pr-[26px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[100%]">
                                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_300 text-left w-[auto]">{`Select type`}</Text>
                                <Image
                                  src={"images/img_vector_1.svg"}
                                  className="h-[5.17px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mb-[8.91px] lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] mt-[8.92px] 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] object-contain w-[6%]"
                                  alt="Vector"
                                />
                              </Row>
                            </Column>
                          </Column>
                          <Column className="items-start justify-start w-[100%]">
                            <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">
                              <span className="text-black_900 font-sourcesanspro">
                                <>{`Due date`}</>
                              </span>
                              <span className="text-red_700 font-sourcesanspro">
                                <>{`*`}</>
                              </span>
                            </Text>
                            <Column className="xl:mt-[3px] lg:mt-[3px] mt-[4px] w-[100%]">
                              <Row className="border border-gray_200 border-solid items-center justify-start lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[27px] xl:pr-[31px] pr-[34.99px] 2xl:pr-[35px] 3xl:pr-[42px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[100%]">
                                <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`06/28/2022`}</Text>
                                <Image
                                  src={"images/img_vector_2.svg"}
                                  className="lg:h-[13px] xl:h-[15px] h-[16.67px] 2xl:h-[17px] 3xl:h-[21px] mb-[3.16px] xl:ml-[10px] ml-[11.67px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] mt-[3.17px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16.67px] 2xl:w-[16px] 3xl:w-[20px]"
                                  alt="Vector"
                                />
                              </Row>
                            </Column>
                          </Column>
                        </List>
                        <Row className="border border-gray_200 border-solid items-start justify-between lg:ml-[18px] xl:ml-[21px] ml-[24.01px] 2xl:ml-[24px] 3xl:ml-[28px] lg:pb-[6px] xl:pb-[7px] pb-[8px] 3xl:pb-[9px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[13px] xl:pr-[15px] pr-[17.66px] 2xl:pr-[17px] 3xl:pr-[21px] lg:pt-[26px] xl:pt-[30px] pt-[34px] 3xl:pt-[40px] rounded-radius4 w-[30%]">
                          <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`09:40`}</Text>
                          <Image
                            src={"images/img_vector_3.svg"}
                            className="lg:h-[13px] xl:h-[15px] h-[16.67px] 2xl:h-[17px] 3xl:h-[21px] mb-[3.16px] lg:ml-[49px] xl:ml-[56px] ml-[63px] 3xl:ml-[75px] mt-[3.17px] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] object-contain lg:w-[12px] xl:w-[14px] w-[16.67px] 2xl:w-[16px] 3xl:w-[20px]"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                      <Column className="items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">{`Task Type`}</Text>
                        <div className="bg-transparent border-0 lg:mt-[3px] mt-[4px] w-[100%] xl:mt-[3px] input-wrap">
                          <Image
                            src={"images/img_vector_4.svg"}
                            className="absolute z-[1] right-[21.659912px] bg-transparent border-0 lg:right-[16px] xl:right-[19px] 2xl:right-[21px] 3xl:right-[26px] my-[auto] inset-y-[0]"
                            alt="Vector"
                          />
                          <Input
                            className="placeholder:bg-transparent bg-transparent border border-gray_200 border-solid font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[47px] xl:pr-[53px] pr-[60.65991199999993px] 2xl:pr-[60px] 3xl:pr-[72px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                            name="Select an outco"
                            placeholder={`Select an outcome`}
                          ></Input>
                        </div>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-gray_100 border border-gray_200 border-solid items-start justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:pb-[486px] xl:pb-[555px] pb-[625px] 3xl:pb-[750px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] w-[36%]">
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">{`Owner`}</Text>
                    <Column className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]">
                      <Row className="bg-white_A700 border border-gray_200 border-solid items-center justify-between mx-[auto] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-radius4 w-[84%]">
                        <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`Jemee Tala`}</Text>
                        <Image
                          src={"images/img_frame456.svg"}
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] ml-[97px] my-[1px] object-contain w-[20%]"
                          alt="Frame456"
                        />
                      </Row>
                    </Column>
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">{`Related to`}</Text>
                    <div className="3xl:ml-[28px] bg-transparent border-0 lg:ml-[18px] lg:mt-[3px] ml-[24px] mt-[4px] w-[84%] xl:ml-[21px] xl:mt-[3px] input-wrap">
                      <Image
                        src={"images/img_vector_5.svg"}
                        className="absolute z-[1] right-[21.659912px] bg-transparent border-0 lg:right-[16px] xl:right-[19px] 2xl:right-[21px] 3xl:right-[26px] my-[auto] inset-y-[0]"
                        alt="Vector"
                      />
                      <Input
                        className="placeholder:bg-transparent bg-white_A700 border border-gray_200 border-solid font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[47px] xl:pr-[53px] pr-[60.65991199999993px] 2xl:pr-[60px] 3xl:pr-[72px] xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                        name="Link this task "
                        placeholder={`Link this task to`}
                      ></Input>
                    </div>
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-black_900 text-left w-[auto]">{`Collaborators (0)`}</Text>
                    <Column className="items-center xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[100%]">
                      <Image
                        src={"images/img_frame418_1.svg"}
                        className="lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] mx-[auto] object-contain rounded-radius4 w-[84%]"
                        alt="Frame418"
                      />
                    </Column>
                  </Column>
                </Row>
                <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-center lg:pl-[505px] xl:pl-[578px] pl-[650px] 3xl:pl-[780px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                  <Button className="bg-white_A700 border border-gray_200 border-solid font-normal not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-center w-[9%]">{`Cancel`}</Button>
                  <Button className="bg-bluegray_901 border border-gray_200 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[7%]">{`Save`}</Button>
                </Row>
              </Column>
            </Stack>
            <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[98%]">
              <header className="w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[41%]">
                    <Text className="absolute border border-bluegray_201 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] right-[0] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[83%]">{`Search your CRM...`}</Text>
                    <Row className="absolute border border-bluegray_201 border-solid items-center justify-start left-[0] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[17%]">
                      <Image
                        src={"images/img_searchoutline.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="searchOutline"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 text-left w-[auto]">{`All`}</Text>
                      <Image
                        src={"images/img_angledownoutl.svg"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="angledownOutl"
                      />
                    </Row>
                  </Stack>
                  <Row className="font-inter items-center justify-between lg:ml-[374px] xl:ml-[427px] ml-[481px] 3xl:ml-[577px] w-[22%]">
                    <Image
                      src={"images/img_group5.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group5"
                    />
                    <Image
                      src={"images/img_group4.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group4"
                    />
                    <Image
                      src={"images/img_group3.svg"}
                      className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                      alt="Group3"
                    />
                    <Column className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]">
                      <Text className="cursor-pointer hover:font-bold font-bold mx-[auto] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 tracking-ls1 w-[auto]">{`1`}</Text>
                    </Column>
                    <Column className="bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] pb-[9px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                      <Text className="cursor-pointer hover:font-bold font-bold mx-[auto] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-amber_500 text-left hover:text-white_A700 tracking-ls1 w-[auto]">{`S`}</Text>
                    </Column>
                  </Row>
                </Row>
              </header>
              <Row className="items-start justify-between 3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] mt-[88px] w-[100%]">
                <Column className="bg-white_A700 items-start justify-start lg:pb-[271px] xl:pb-[310px] pb-[349px] 3xl:pb-[419px] lg:pt-[25px] xl:pt-[29px] pt-[33px] 3xl:pt-[39px] rounded-radius8 w-[66%]">
                  <Row className="font-inter items-center justify-between lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] w-[94%]">
                    <Text className="font-medium lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 text-left w-[auto]">
                      <span className="text-bluegray_900 font-sourcesanspro font-light">
                        <>{`Hey`}</>
                      </span>
                      <span className="text-bluegray_900 font-sourcesanspro font-normal">
                        <>{` `}</>
                      </span>
                      <span className="text-bluegray_900 font-sourcesanspro font-semibold">
                        <>{`Jemee!`}</>
                      </span>
                    </Text>
                    <Row className="font-sourcesanspro items-center justify-evenly lg:ml-[338px] xl:ml-[386px] ml-[435px] 3xl:ml-[522px] w-[35%]">
                      <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-start lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[40%]">
                        <Image
                          src={"images/img_addtask1.svg"}
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                          alt="addtask1"
                        />
                        <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Add task`}</Text>
                      </Row>
                      <div className="bg-transparent border-0 w-[48%] input-wrap">
                        <Image
                          src={"images/img_vector_6.svg"}
                          className="absolute z-[1] h-[16.67px] left-[17.67px] bg-transparent border-0 lg:h-[13px] lg:left-[13px] xl:h-[15px] xl:left-[15px] 2xl:h-[17px] 2xl:left-[17px] 3xl:h-[21px] 3xl:left-[21px] my-[auto] inset-y-[0]"
                          alt="Vector"
                        />
                        <Input
                          className="bg-gray_50 placeholder:bg-transparent border border-gray_200 border-solid font-normal not-italic pb-[15.66px] lg:pl-[40px] xl:pl-[46px] pl-[52.01px] 2xl:pl-[52px] 3xl:pl-[62px] pt-[15.67px] lg:py-[12px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                          name="Add meeting"
                          placeholder={`Add meeting`}
                        ></Input>
                      </div>
                      <Image
                        src={"images/img_frame419.svg"}
                        className="lg:h-[31px] xl:h-[35px] h-[39px] 2xl:h-[40px] 3xl:h-[47px] object-contain rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[13%]"
                        alt="Frame419"
                      />
                    </Row>
                  </Row>
                  <Column className="font-sourcesanspro items-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[393px] xl:pr-[450px] pr-[506px] 3xl:pr-[607px] w-[100%]">
                    <Row className="items-center justify-start w-[39%]">
                      <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 text-left w-[auto]">{`Showing all`}</Text>
                      <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 text-left w-[auto]">{`All Activities`}</Text>
                      <Image
                        src={"images/img_trianglesolid.svg"}
                        className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                        alt="triangleSolid"
                      />
                      <Text className="font-normal lg:ml-[14px] xl:ml-[16px] ml-[18px] 3xl:ml-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_901 text-left w-[auto]">{`for`}</Text>
                      <Row className="items-center justify-evenly ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[29%]">
                        <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 text-left w-[auto]">{`Today jun 27`}</Text>
                        <Image
                          src={"images/img_trianglesolid_1.svg"}
                          className="h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[5px] lg:my-[5px] my-[6.5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"
                          alt="triangleSolid"
                        />
                      </Row>
                    </Row>
                  </Column>
                  <Row className="border border-gray_200 border-solid font-sourcesanspro items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                    <Row className="items-center justify-between w-[45%]">
                      <Text className="font-normal lg:leading-[17px] xl:leading-[20px] leading-[23.00px] 2xl:leading-[23px] 3xl:leading-[27px] not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[21%]">{`Select all`}</Text>
                      <Row className="items-center justify-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[16%]">
                        <Image
                          src={"images/img_checkbox.svg"}
                          className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                          alt="Checkbox"
                        />
                        <Text className="font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Open`}</Text>
                      </Row>
                      <Text className="font-normal lg:leading-[17px] xl:leading-[20px] leading-[23.00px] 2xl:leading-[23px] 3xl:leading-[27px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[20%]">{`Overdue`}</Text>
                      <Text className="font-normal lg:leading-[17px] xl:leading-[20px] leading-[23.00px] 2xl:leading-[23px] 3xl:leading-[27px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:pl-[23px] xl:pl-[26px] pl-[30px] 3xl:pl-[36px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[24%]">{`Completed`}</Text>
                    </Row>
                    <Text className="font-normal lg:ml-[223px] xl:ml-[255px] ml-[287px] 3xl:ml-[344px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800 text-right w-[auto]">{`All tasks and meetings`}</Text>
                  </Row>
                  <Text className="font-semibold font-sourcesanspro lg:ml-[150px] xl:ml-[172px] ml-[194px] 3xl:ml-[232px] lg:mt-[62px] xl:mt-[71px] mt-[80px] 3xl:mt-[96px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 text-left w-[auto]">{`Find your upcoming tasks, meetings and reminders here`}</Text>
                  <Row className="font-sourcesanspro items-center justify-start lg:ml-[46px] xl:ml-[53px] ml-[60px] 3xl:ml-[72px] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] w-[86%]">
                    <Column className="items-center mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[52%]">
                      <Text className="font-semibold mx-[auto] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 text-center w-[auto]">{`Bring your emails into CRM`}</Text>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-center w-[auto]">{`Select your email provider`}</Text>
                      <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-start lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[19%]">
                          <Image
                            src={"images/img_gmailsvg.svg"}
                            className="lg:h-[12px] xl:h-[14px] h-[15px] 2xl:h-[16px] 3xl:h-[19px] xl:my-[3px] lg:my-[3px] my-[4px] object-contain w-[27%]"
                            alt="Gmailsvg"
                          />
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Gmail`}</Text>
                        </Row>
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[25%]">
                          <Stack className="lg:h-[16px] xl:h-[19px] h-[20.48999px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] w-[20%]">
                            <Stack className="absolute lg:h-[16px] xl:h-[19px] h-[20.48999px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] opacity-op2 w-[100%]">
                              <Column className="absolute inset-[0] w-[100%]">
                                <Column className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[100%]">
                                  <Image
                                    src={"images/defaultNoData.png"}
                                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mx-[auto] object-cover lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                                    alt="Vector"
                                  />
                                </Column>
                                <Column className="items-end lg:pl-[3px] pl-[4.74px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] pr-[1.98px] 2xl:pr-[1px] xl:pr-[1px] lg:pr-[1px] 3xl:pr-[2px] w-[100%]">
                                  <Image
                                    src={"images/img_rectangle.png"}
                                    className="h-[5.25px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mr-[0] object-contain w-[66%]"
                                    alt="Rectangle"
                                  />
                                </Column>
                              </Column>
                              <Image
                                src={"images/img_vector_7.svg"}
                                className="absolute bottom-[5%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[13%] w-[61%]"
                                alt="Vector"
                              />
                            </Stack>
                            <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.179993px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] justify-center m-[auto] w-[76%]">
                              <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.179993px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] w-[100%]">
                                <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[100%]">
                                  <Column className="items-center pr-[1px] w-[100%]">
                                    <Stack className="lg:h-[15px] xl:h-[17px] h-[18.820007px] 2xl:h-[19px] 3xl:h-[23px] mx-[auto] w-[99%]">
                                      <Image
                                        src={"images/img_vector_8.png"}
                                        className="absolute lg:h-[15px] xl:h-[17px] h-[18.75px] 2xl:h-[19px] 3xl:h-[23px] inset-y-[0] my-[auto] object-contain right-[0] w-[45%]"
                                        alt="Vector"
                                      />
                                      <Image
                                        src={"images/img_vector_9.png"}
                                        className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                        alt="Vector"
                                      />
                                      <Image
                                        src={"images/img_vector_10.png"}
                                        className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                        alt="Vector"
                                      />
                                    </Stack>
                                  </Column>
                                  <Column className="items-end lg:pl-[1px] pl-[2.53px] 2xl:pl-[2px] xl:pl-[2px] 3xl:pl-[3px] w-[100%]">
                                    <Image
                                      src={"images/img_rectangle_1.png"}
                                      className="h-[4.57px] lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] object-contain w-[83%]"
                                      alt="Rectangle"
                                    />
                                  </Column>
                                </Column>
                                <Image
                                  src={"images/img_vector_11.svg"}
                                  className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[1%] w-[81%]"
                                  alt="Vector"
                                />
                              </Stack>
                              <Stack className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[18%] w-[46%]">
                                <Image
                                  src={"images/img_vector_12.png"}
                                  className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                                  alt="Vector"
                                />
                                <Image
                                  src={"images/img_vector_13.png"}
                                  className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                                  alt="Vector"
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Office 365`}</Text>
                        </Row>
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[23%]">
                          <Image
                            src={"images/img_outlooklogo.svg"}
                            className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                            alt="Outlooklogo"
                          />
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Outlook`}</Text>
                        </Row>
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[21%]">
                          <Image
                            src={"images/img_mail1.png"}
                            className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                            alt="mail1"
                          />
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Others`}</Text>
                        </Row>
                      </Row>
                    </Column>
                    <Line className="bg-bluegray_50 lg:h-[109px] xl:h-[125px] h-[140px] 2xl:h-[141px] 3xl:h-[169px] lg:ml-[42px] xl:ml-[48px] ml-[54px] 3xl:ml-[64px] rotate-[90deg] w-[1px]" />
                    <Column className="items-start mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:ml-[41px] xl:ml-[47px] ml-[53px] 3xl:ml-[63px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[34%]">
                      <Column className="items-start lg:px-[25px] xl:px-[29px] px-[33px] 3xl:px-[39px] w-[100%]">
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 text-left w-[auto]">{`Bring your emails into CRM`}</Text>
                      </Column>
                      <Text className="font-normal lg:ml-[38px] xl:ml-[43px] ml-[49px] 3xl:ml-[58px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`Select your email provider`}</Text>
                      <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-start lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[55%]">
                          <Image
                            src={"images/img_googlecalendar.svg"}
                            className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                            alt="googlecalendar"
                          />
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Google Calender`}</Text>
                        </Row>
                        <Row className="bg-gray_50 border border-gray_200 border-solid items-center justify-center lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-radius4 w-[39%]">
                          <Stack className="lg:h-[16px] xl:h-[19px] h-[20.48999px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] w-[20%]">
                            <Stack className="absolute lg:h-[16px] xl:h-[19px] h-[20.48999px] 2xl:h-[21px] 3xl:h-[25px] inset-[0] opacity-op2 w-[100%]">
                              <Column className="absolute inset-[0] w-[100%]">
                                <Column className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] w-[100%]">
                                  <Image
                                    src={"images/defaultNoData.png"}
                                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] mx-[auto] object-cover lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                                    alt="Vector"
                                  />
                                </Column>
                                <Column className="items-end lg:pl-[3px] pl-[4.74px] 2xl:pl-[4px] xl:pl-[4px] 3xl:pl-[5px] pr-[1.99px] 2xl:pr-[1px] xl:pr-[1px] lg:pr-[1px] 3xl:pr-[2px] w-[100%]">
                                  <Image
                                    src={"images/img_rectangle_2.png"}
                                    className="h-[5.25px] xl:h-[5px] lg:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mr-[0] object-contain w-[66%]"
                                    alt="Rectangle"
                                  />
                                </Column>
                              </Column>
                              <Image
                                src={"images/img_vector_14.svg"}
                                className="absolute bottom-[5%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[13%] w-[61%]"
                                alt="Vector"
                              />
                            </Stack>
                            <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.179993px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] justify-center m-[auto] w-[76%]">
                              <Stack className="absolute lg:h-[15px] xl:h-[18px] h-[19.179993px] 2xl:h-[20px] 3xl:h-[24px] inset-[0] w-[100%]">
                                <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[100%]">
                                  <Column className="items-center pr-[1px] w-[100%]">
                                    <Stack className="lg:h-[15px] xl:h-[17px] h-[18.820007px] 2xl:h-[19px] 3xl:h-[23px] mx-[auto] w-[99%]">
                                      <Image
                                        src={"images/img_vector_15.png"}
                                        className="absolute lg:h-[15px] xl:h-[17px] h-[18.75px] 2xl:h-[19px] 3xl:h-[23px] inset-y-[0] my-[auto] object-contain right-[0] w-[45%]"
                                        alt="Vector"
                                      />
                                      <Image
                                        src={"images/img_vector_16.png"}
                                        className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                        alt="Vector"
                                      />
                                      <Image
                                        src={"images/img_vector_17.png"}
                                        className="absolute lg:h-[12px] h-[14.76px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] object-contain top-[0] w-[65%]"
                                        alt="Vector"
                                      />
                                    </Stack>
                                  </Column>
                                  <Column className="items-end lg:pl-[1px] pl-[2.53px] 2xl:pl-[2px] xl:pl-[2px] 3xl:pl-[3px] w-[100%]">
                                    <Image
                                      src={"images/img_rectangle_3.png"}
                                      className="h-[4.57px] lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] object-contain w-[83%]"
                                      alt="Rectangle"
                                    />
                                  </Column>
                                </Column>
                                <Image
                                  src={"images/img_vector_18.svg"}
                                  className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] object-contain right-[1%] w-[81%]"
                                  alt="Vector"
                                />
                              </Stack>
                              <Stack className="absolute bottom-[1%] h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] left-[18%] w-[46%]">
                                <Image
                                  src={"images/img_vector_19.png"}
                                  className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                                  alt="Vector"
                                />
                                <Image
                                  src={"images/img_vector_20.png"}
                                  className="absolute h-[4.14px] xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] inset-[0] object-cover w-[100%]"
                                  alt="Vector"
                                />
                              </Stack>
                            </Stack>
                          </Stack>
                          <Text className="font-normal xl:ml-[3px] lg:ml-[3px] ml-[4px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-left w-[auto]">{`Office 365`}</Text>
                        </Row>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column className="lg:mb-[495px] xl:mb-[566px] mb-[637px] 3xl:mb-[764px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[33%]">
                  <Stack className="lg:h-[25px] xl:h-[28px] h-[31px] 2xl:h-[32px] 3xl:h-[38px] w-[100%]">
                    <Line className="absolute bg-bluegray_400 bottom-[52%] h-[0.03px] inset-x-[0] top-[48%] w-[100%]" />
                    <div className="3xl:ml-[133px] absolute bg-transparent border-0 left-[26%] lg:ml-[86px] ml-[111px] w-[39%] xl:ml-[98px] input-wrap">
                      <div className="input-wrap">
                        <Image
                          src={"images/img_vector_21.svg"}
                          className="absolute z-[1] left-[17.55px] bg-transparent border-0 my-[auto] inset-y-[0]"
                          alt="Vector"
                        />
                        <Input
                          className="bg-gray_50 placeholder:bg-transparent border border-gray_200 border-solid font-normal not-italic pb-[11.66px] lg:pl-[40px] xl:pl-[45px] pl-[51.47px] 2xl:pl-[51px] 3xl:pl-[61px] pt-[11.67px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                          name="Configure widge"
                          placeholder={`Configure widgets`}
                        ></Input>
                      </div>
                    </div>
                  </Stack>
                  <Column className="bg-white_A700 items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[32px] xl:pb-[37px] pb-[42px] 3xl:pb-[50px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius8 w-[100%]">
                    <Row className="items-center justify-start lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[37%]">
                      <Image
                        src={"images/img_group3_1.svg"}
                        className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                        alt="Group3"
                      />
                      <Text className="font-semibold 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`Freddy AI Insights`}</Text>
                    </Row>
                    <Column className="items-center xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                      <Line className="bg-bluegray_50 h-[1px] w-[100%]" />
                      <Text className="font-normal lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] mx-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-center w-[auto]">{`Freddy doesn’t have any insights for now. But it will soon`}</Text>
                    </Column>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Stack>
        </Row>
      </Column>
    </>
  );
};

export default AddTaskPage;
