import React from "react";

import { useNavigate } from "react-router-dom";
import { getTasks } from "service/api";
import {
  Row,
  Column,
  Image,
  Stack,
  Text,
  Button,
  Line,
  List,
  CheckBox,
  Input,
} from "components";

const TasksPage = () => {
  const [apiData, setapiData] = React.useState();
  React.useEffect(() => {
    callApi();
  }, []);
  const navigate = useNavigate();

  function callApi() {
    const req = {};
    getTasks(req)
      .then((res) => {
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate1() {
    navigate("/addtask");
  }

  return (
    <>
      <Row className="bg-bluegray_51 font-sourcesanspro items-center mx-[auto] w-[100%]">
        <aside className="items-center lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] lg:px-[18px] xl:px-[21px] px-[24px] 3xl:px-[28px] w-[7%]">
          <Column className="">
            <Image
              src={"images/img_group_1.svg"}
              className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] mx-[auto] object-contain lg:w-[38px] xl:w-[44px] w-[50px] 3xl:w-[60px]"
              alt="Group"
            />
            <Image
              src={"images/img_frame407_1.svg"}
              className="3xl:h-[1075px] lg:h-[697px] xl:h-[797px] h-[895px] 2xl:h-[896px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] mx-[auto] object-contain w-[51%]"
              alt="Frame407"
            />
          </Column>
        </aside>
        <Column className="items-center lg:pb-[45px] xl:pb-[52px] pb-[59px] 3xl:pb-[70px] w-[93%]">
          <Stack className="lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] w-[100%]">
            <div className="absolute bg-white_A700 border border-indigo_50 border-solid lg:h-[56px] xl:h-[65px] h-[72px] 2xl:h-[73px] 3xl:h-[87px] inset-[0] w-[100%]"></div>
            <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[98%]">
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] w-[41%]">
                <Text className="absolute border border-bluegray_201 border-solid font-normal leading-[normal] not-italic 3xl:pl-[10px] lg:pl-[7px] xl:pl-[8px] pl-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] right-[0] rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_400 text-left w-[83%]">{`Search your CRM...`}</Text>
                <Row className="absolute border border-bluegray_201 border-solid items-center justify-start left-[0] lg:p-[6px] xl:p-[7px] p-[8px] 3xl:p-[9px] rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[17%]">
                  <Image
                    src={"images/img_searchoutline_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="searchOutline"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[3px] lg:ml-[3px] ml-[4px] lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-bluegray_701 text-left w-[auto]">{`All`}</Text>
                  <Image
                    src={"images/img_angledownoutl_1.svg"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="angledownOutl"
                  />
                </Row>
              </Stack>
              <Row className="font-inter items-center justify-between lg:ml-[374px] xl:ml-[427px] ml-[481px] 3xl:ml-[577px] w-[22%]">
                <Image
                  src={"images/img_group5_1.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Group5"
                />
                <Image
                  src={"images/img_group4_1.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Group4"
                />
                <Image
                  src={"images/img_group3_2.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                  alt="Group3"
                />
                <Column className="bg-red_600 lg:h-[28px] xl:h-[33px] h-[36px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:my-[1px] lg:my-[1px] my-[2px] lg:pb-[3px] xl:pb-[4px] pb-[5px] 3xl:pb-[6px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px] rounded-radius50 lg:w-[28px] xl:w-[32px] w-[36px] 3xl:w-[43px]">
                  <Text className="font-bold mx-[auto] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 tracking-ls1 w-[auto]">{`1`}</Text>
                </Column>
                <Column className="bg-amber_100 lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] items-center lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] 3xl:pb-[10px] lg:pb-[7px] xl:pb-[8px] pb-[9px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] lg:px-[10px] xl:px-[11px] px-[13px] 3xl:px-[15px] rounded-radius50 lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]">
                  <Text className="font-bold mx-[auto] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-amber_500 text-left tracking-ls1 w-[auto]">{`S`}</Text>
                </Column>
              </Row>
            </Row>
          </Stack>
          <header className="w-[100%]">
            <Row className="bg-gray_100 border border-indigo_50 border-solid items-center justify-start lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px] lg:py-[6px] xl:py-[7px] py-[8px] 3xl:py-[9px] w-[100%]">
              <Text className="font-semibold lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_700 text-left w-[auto]">{`My meetings and Tasks`}</Text>
              <Button className="bg-white_A700 border border-gray_200 border-solid font-normal 3xl:ml-[1091px] lg:ml-[707px] xl:ml-[808px] ml-[909px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_700 text-center w-[8%]">{`Add meeting`}</Button>
              <Button
                className="common-pointer bg-bluegray_901 border border-gray_200 border-solid font-normal ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:py-[11px] py-[12.5px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-white_A700 w-[6%]"
                onClick={handleNavigate1}
              >{`Add Task`}</Button>
            </Row>
          </header>
          <Row className="items-start justify-evenly w-[100%]">
            <Column className="bg-white_A700 border border-bluegray_101 border-solid w-[66%]">
              <Column className="items-center w-[100%]">
                <Row className="border border-gray_200 border-solid items-center justify-start lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] lg:pr-[536px] xl:pr-[613px] pr-[690px] 3xl:pr-[828px] 3xl:pt-[10px] lg:pt-[7px] xl:pt-[8px] pt-[9px] w-[100%]">
                  <Text className="font-normal lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_400 text-left w-[auto]">{`MEETINGS`}</Text>
                  <Column className="lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] w-[7%]">
                    <Column className="items-start px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] w-[100%]">
                      <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 text-left w-[auto]">{`TASKS`}</Text>
                    </Column>
                    <Line className="bg-blue_800 h-[2px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[100%]" />
                  </Column>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  {apiData?.tasks?.map((apiDataEle) => {
                    return (
                      <Stack className="border border-gray_200 border-solid xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[489px] xl:pr-[559px] pr-[629px] 3xl:pr-[755px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                        <CheckBox
                          checked={apiDataEle?.description}
                          className="absolute font-normal inset-y-[0] left-[0] my-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[22%]"
                          inputClassName="2xl:h-[27px] 3xl:h-[32px] 3xl:w-[31px] bg-white_A700 border-bluegray_50 border-bw083 border-solid h-[26px] lg:h-[21px] lg:w-[20px] rounded-radius25 w-[26px] xl:h-[24px] xl:w-[23px] mr-[5px]"
                          name="Group65"
                          label={`This is just a sample task`}
                        ></CheckBox>
                        <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[6%] my-[auto] w-[21%]">
                          <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-red_700 w-[auto]">
                            {apiDataEle?.title}
                          </Text>
                          <Text className="font-normal lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">
                            {apiDataEle?.due_date}
                          </Text>
                        </Column>
                      </Stack>
                    );
                  })}
                </List>
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="bg-gray_101 border border-gray_200 border-solid items-center justify-between my-[0] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] w-[100%]">
                    <Stack className="3xl:h-[106px] lg:h-[69px] xl:h-[79px] h-[88px] 2xl:h-[89px] w-[22%]">
                      <CheckBox
                        className="absolute font-normal inset-x-[0] inset-y-[35%] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[100%]"
                        inputClassName="2xl:h-[27px] 3xl:h-[32px] 3xl:w-[31px] bg-white_A700 border-bluegray_50 border-bw083 border-solid h-[26px] lg:h-[21px] lg:w-[20px] rounded-radius25 w-[26px] xl:h-[24px] xl:w-[23px] mr-[5px]"
                        name="Group69"
                        label={`This is just a sample task`}
                      ></CheckBox>
                      <Column className="absolute items-start justify-start lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] right-[0] w-[73%]">
                        <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 text-left w-[auto]">{`Sample Task`}</Text>
                        <Text className="font-normal lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`Due date: in 2 months`}</Text>
                      </Column>
                    </Stack>
                    <Image
                      src={"images/img_frame448.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[453px] xl:ml-[518px] ml-[583px] 3xl:ml-[700px] lg:my-[24px] xl:my-[28px] my-[32px] 3xl:my-[38px] object-contain w-[8%]"
                      alt="Frame448"
                    />
                  </Row>
                  <Stack className="border border-gray_200 border-solid xl:h-[107px] h-[120px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] my-[0] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:pr-[521px] xl:pr-[596px] pr-[671px] 3xl:pr-[805px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] w-[100%]">
                    <CheckBox
                      className="absolute font-normal inset-y-[0] left-[0] my-[auto] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[22%]"
                      inputClassName="2xl:h-[27px] 3xl:h-[32px] 3xl:w-[31px] bg-white_A700 border-bluegray_50 border-bw083 border-solid h-[26px] lg:h-[21px] lg:w-[20px] rounded-radius25 w-[26px] xl:h-[24px] xl:w-[23px] mr-[5px]"
                      name="Group70"
                      label={`This is just a sample task`}
                    ></CheckBox>
                    <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[6%] my-[auto] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] w-[16%]">
                      <Text className="font-semibold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_900 text-left w-[auto]">{`Sample Task`}</Text>
                      <Text className="font-normal lg:mt-[28px] xl:mt-[32px] mt-[36px] 3xl:mt-[43px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_600 text-left w-[auto]">{`Due date: in 2 months`}</Text>
                    </Column>
                  </Stack>
                </List>
              </Column>
              <Input
                className="placeholder:bg-transparent bg-transparent border border-gray_200 border-solid font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[16px] xl:py-[19px] py-[21.5px] 2xl:py-[21px] 3xl:py-[25px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_700 text-bluegray_700 text-left w-[100%]"
                name="Showing task du"
                placeholder={`Showing task due from 18 may 2022 - 22 May 2023`}
              ></Input>
            </Column>
            <Stack className="lg:h-[194px] xl:h-[222px] h-[249px] 2xl:h-[250px] 3xl:h-[299px] lg:mb-[458px] xl:mb-[523px] mb-[589px] 3xl:mb-[707px] w-[34%]">
              <Image
                src={"images/img_group59.svg"}
                className="absolute lg:h-[194px] xl:h-[222px] h-[249px] 2xl:h-[250px] 3xl:h-[299px] inset-[0] object-cover w-[100%]"
                alt="Group59"
              />
              <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[3%] my-[auto] w-[20%]">
                <Text className="font-semibold lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`OPEN TASKS`}</Text>
                <Row className="items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[83%]">
                  <Image
                    src={"images/img_radiobutton.svg"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="RadioButton"
                  />
                  <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`Overdue`}</Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[68%]">
                  <Image
                    src={"images/img_radiobutton_1.svg"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="RadioButton"
                  />
                  <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`Today`}</Text>
                </Row>
                <Row className="items-center justify-evenly lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[96%]">
                  <Image
                    src={"images/img_radiobutton_2.svg"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="RadioButton"
                  />
                  <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`Tomorrow`}</Text>
                </Row>
                <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`ALL TASKS`}</Text>
                <Row className="items-center justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[63%]">
                  <Image
                    src={"images/img_radiobutton_3.svg"}
                    className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                    alt="RadioButton"
                  />
                  <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`Open`}</Text>
                </Row>
                <Column className="lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Row className="items-center justify-evenly w-[100%]">
                    <Image
                      src={"images/img_radiobutton_4.svg"}
                      className="lg:h-[16px] xl:h-[18px] h-[20px] 2xl:h-[21px] 3xl:h-[25px] my-[1px] object-contain lg:w-[15px] xl:w-[17px] w-[20px] 3xl:w-[24px]"
                      alt="RadioButton"
                    />
                    <Text className="font-normal lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_900 text-left w-[auto]">{`Completed`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default TasksPage;
