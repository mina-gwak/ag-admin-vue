const tableIndex = {
  kakao: [
    {
      label: '접수일자',
      property: 'receiptDate',
      type: 'date',
    },
    {
      label: '카카오톡ID',
      property: 'kakaotalkId',
      type: 'text',
    },
    {
      label: '문의차량',
      property: 'inquiryVehicle',
      type: 'text',
    },
    {
      label: '배분여부',
      property: 'isDistribution',
      type: 'checkbox',
    },
    {
      label: '배분일자',
      property: 'distributionDate',
      type: 'date',
    },
  ],
  estimateInquiries: [
    {
      label: '접수일자',
      property: 'receiptDate',
      type: 'date',
    },
    {
      label: '이름',
      property: 'name',
      type: 'text',
    },
    {
      label: '전화번호',
      property: 'phoneNumber',
      type: 'text',
    },
    {
      label: '렌트 / 리스',
      property: 'purchaseType',
      type: 'select',
    },
    {
      label: '상담가능시간',
      property: 'consultTime',
      type: 'select',
    },
    {
      label: '상품',
      property: 'vehicleType',
      type: 'select',
    },
    {
      label: '문의내용',
      property: 'consultContent',
      type: 'textarea',
    },
    {
      label: '상담방식',
      property: 'consultType',
      type: 'checkbox',
    },
    {
      label: '개인정보취급',
      property: 'isAgreeToPrivacyPolicy',
      type: 'checkbox',
    },
    {
      label: '마케팅',
      property: 'isAgreeToMarketing',
      type: 'checkbox',
    },
    {
      label: '배분여부',
      property: 'isDistribution',
      type: 'checkbox',
    },
    {
      label: '배분일자',
      property: 'distributionDate',
      type: 'date',
    },
  ],
  visit: [
    {
      label: '요청일시',
      property: 'receiptDate',
      type: 'date',
    },
    {
      label: '이름',
      property: 'name',
      type: 'text',
    },
    {
      label: '전화번호',
      property: 'phoneNumber',
      type: 'text',
    },
    {
      label: '방문희망주소',
      property: 'address',
      type: 'text',
    },
    {
      label: '개인정보',
      property: 'isAgreeToPrivacyPolicy',
      type: 'checkbox',
    },
    {
      label: '마케팅',
      property: 'isAgreeToMarketing',
      type: 'checkbox',
    },
    {
      label: '배분여부',
      property: 'isDistribution',
      type: 'checkbox',
    },
  ],
};

export default tableIndex;