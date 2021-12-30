const tableIndex = {
  kakao: [
    {
      label: '접수일자',
      property: 'created_at',
      type: 'date',
    },
    {
      label: '카카오톡ID',
      property: 'kakao_id',
      type: 'text',
    },
    {
      label: '문의차량',
      property: 'car_name',
      type: 'text',
    },
    {
      label: '배분여부',
      property: 'division_complete',
      type: 'checkbox',
    },
    {
      label: '배분일자',
      property: 'division_at',
      type: 'date',
    },
  ],
  estimate: [
    {
      label: '접수일자',
      property: 'created_at',
      type: 'date',
    },
    {
      label: '이름',
      property: 'customer_name',
      type: 'text',
    },
    {
      label: '전화번호',
      property: 'customer_phone',
      type: 'text',
    },
    {
      label: '렌트 / 리스',
      property: 'purchase_type',
      type: 'select',
    },
    {
      label: '상담가능시간',
      property: 'cont_time',
      type: 'select',
    },
    {
      label: '상품',
      property: 'location_type',
      type: 'select',
    },
    {
      label: '문의내용',
      property: 'content',
      type: 'textarea',
    },
    {
      label: '상담방식',
      property: 'consult_type',
      type: 'checkbox',
    },
    {
      label: '개인정보취급',
      property: 'personal_info_check',
      type: 'checkbox',
    },
    {
      label: '마케팅',
      property: 'marketing_info_check',
      type: 'checkbox',
    },
    {
      label: '배분여부',
      property: 'division_complete',
      type: 'checkbox',
    },
    {
      label: '배분일자',
      property: 'division_at',
      type: 'date',
    },
  ],
  visit: [
    {
      label: '요청일시',
      property: 'created_at',
      type: 'date',
    },
    {
      label: '이름',
      property: 'customer_name',
      type: 'text',
    },
    {
      label: '전화번호',
      property: 'customer_phone',
      type: 'text',
    },
    {
      label: '방문희망주소',
      property: 'address',
      type: 'text',
    },
    {
      label: '개인정보',
      property: 'personal_info_check',
      type: 'checkbox',
    },
    {
      label: '마케팅',
      property: 'marketing_info_check',
      type: 'checkbox',
    },
    {
      label: '배분여부',
      property: 'division_complete',
      type: 'checkbox',
    },
  ],
  slides: [
    {
      label: '제목',
      property: 'title',
      type: 'text',
      hide: false,
    },
    {
      label: '상태',
      property: 'status',
      type: 'text',
      hide: false,
    },
    {
      label: '링크페이지',
      property: 'link',
      type: 'text',
      hide: false,
    },
    {
      label: '내용',
      property: 'content',
      type: 'text',
    },
    {
      label: '게시시작일',
      property: 'start_at',
      type: 'date',
      hide: false,
    },
    {
      label: '게시종료일',
      property: 'end_at',
      type: 'date',
      hide: false,
    },
    {
      label: '이미지',
      property: 'image',
      type: 'img',
      hide: true,
    },
  ],
  events: [
    {
      label: '이벤트명',
      property: 'title',
      type: 'text',
      hide: false,
    },
    {
      label: '내용',
      property: 'content',
      type: 'text',
      hide: false,
    },
    {
      label: '시작일',
      property: 'startDate',
      type: 'text',
      hide: false,
    },
    {
      label: '종료일',
      property: 'endDate',
      type: 'text',
      hide: false,
    },
    {
      label: '링크',
      property: 'link',
      type: 'text',
      hide: true,
    },
    {
      label: '썸네일',
      property: 'mainImage',
      type: 'img',
      hide: true,
    },
    {
      label: '상세 이미지',
      property: 'detailImage',
      type: 'img',
      hide: true,
    },
    {
      label: '상태',
      property: 'eventStatus',
      hide: false,
    }
  ],
};

export default tableIndex;