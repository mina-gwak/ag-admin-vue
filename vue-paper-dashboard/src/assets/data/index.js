const tableIndex = {
  kakao: [
    {
      label: '접수일자',
      property: 'receiptDate',
    },
    {
      label: '카카오톡ID',
      property: 'kakaotalkId',
    },
    {
      label: '문의차량',
      property: 'inquiryVehicle',
    },
    {
      label: '배분여부',
      property: 'isDistribution',
    },
    {
      label: '배분일자',
      property: 'distributionDate',
    },
  ],
  estimateInquiry: [
    {
      label: '접수일자',
      property: 'receiptDate',
    },
    {
      label: '이름',
      property: 'name',
    },
    {
      label: '전화번호',
      property: 'phoneNumber',
    },
    {
      label: '렌트 / 리스',
      property: 'purchaseType',
    },
    {
      label: '상담가능시간',
      property: 'consultTime',
    },
    {
      label: '상품',
      property: 'vehicleType',
    },
    {
      label: '문의내용',
      property: 'consultContent',
    },
    {
      label: '상담방식',
      property: 'consultType',
    },
    {
      label: '개인정보취급',
      property: 'isAgreeToPrivacyPolicy',
    },
    {
      label: '마케팅',
      property: 'isAgreeToMarketing',
    },
    {
      label: '배분여부',
      property: 'isDistribution',
    },
    {
      label: '배분일자',
      property: 'distributionDate',
    },
  ],
  visit: [
    {
      label: '요청일시',
      property: 'receiptDate',
    },
    {
      label: '이름',
      property: 'name',
    },
    {
      label: '전화번호',
      property: 'phoneNumber',
    },
    {
      label: '방문희망주소',
      property: 'address',
    },
    {
      label: '개인정보',
      property: 'isAgreeToPrivacyPolicy',
    },
    {
      label: '마케팅',
      property: 'isAgreeToMarketing',
    },
    {
      label: '배분여부',
      property: 'isDistribution',
    },
  ],
};

export default tableIndex;