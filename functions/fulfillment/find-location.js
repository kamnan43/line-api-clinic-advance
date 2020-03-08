const dialogflow = require('dialogflow-fulfillment');

async function handleFindLocation(agent) {
  console.log('agent.parameters;', agent.parameters);
  // const { lat, lng } = agent.parameters;

  const payloadJson = {
    type: 'flex',
    altText: 'จุดรับบริจาค',
    contents: {
      type: 'carousel',
      contents: [
        {
          type: 'bubble',
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'ศูนย์บริการโลหิตแห่งชาติ สภากาชาดไทย',
                size: 'xl',
                weight: 'bold',
                wrap: true
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                margin: 'lg',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'Place',
                        // flex: 1,
                        size: 'sm',
                        color: '#AAAAAA'
                      },
                      {
                        type: 'text',
                        text: 'สภากาชาดไทย ถนนอังรีดูนังต์',
                        // flex: 5,
                        size: 'sm',
                        color: '#666666',
                        wrap: true
                      }
                    ]
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'Time',
                        // flex: 1,
                        size: 'sm',
                        color: '#AAAAAA'
                      },
                      {
                        type: 'text',
                        text: 'วันจันทร์และวันศุกร์ 08.00 – 16.30 น. วันอังคาร-พฤหัสบดี 07.30 – 19.30 น. และ วันเสาร์-อาทิตย์ 08.30 – 15.30 น.',
                        // flex: 5,
                        size: 'sm',
                        color: '#666666',
                        wrap: true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            // flex: 0,
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'นำทาง',
                  uri: 'https://www.google.com/maps/place/National+Blood+Center,+Thai+Red+Cross+Society/@13.7326995,100.5309293,17z/data=!4m8!1m2!2m1!1z4Liq4Lig4Liy4LiB4Liy4LiK4Liy4LiU4LmE4LiX4LiiIOC4luC4meC4meC4reC4seC4h-C4o-C4teC4lOC4ueC4meC4seC4h-C4leC5jA!3m4!1s0x0:0x78eb731258a608f1!8m2!3d13.7336217!4d100.5329825'
                },
                height: 'sm',
                style: 'link'
              },
              {
                type: 'spacer',
                size: 'sm'
              }
            ]
          }
        },
        {
          type: 'bubble',
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'โรงพยาบาลศิริราช',
                size: 'xl',
                weight: 'bold',
                wrap: true
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                margin: 'lg',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'Place',
                        // flex: 1,
                        size: 'sm',
                        color: '#AAAAAA'
                      },
                      {
                        type: 'text',
                        text: 'ธนาคารเลือด ชั้น 3 อาคาร 72 ปี',
                        // flex: 5,
                        size: 'sm',
                        color: '#666666',
                        wrap: true
                      }
                    ]
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'Time',
                        // flex: 1,
                        size: 'sm',
                        color: '#AAAAAA'
                      },
                      {
                        type: 'text',
                        text: 'วันจันทร์-ศุกร์ 08.30 – 18.00 น. และ วันเสาร์-อาทิตย์ 08.30 – 16.00 น.',
                        // flex: 5,
                        size: 'sm',
                        color: '#666666',
                        wrap: true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            // flex: 0,
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'นำทาง',
                  uri: 'https://www.google.com/maps/place/Siriraj+Piyamaharajkarun+Hospital/@13.7599318,100.483604,17z/data=!3m1!4b1!4m5!3m4!1s0x30e2990a6b606d03:0xfae24cbcaad7e9e1!8m2!3d13.7599266!4d100.4857927'
                },
                height: 'sm',
                style: 'link'
              },
              {
                type: 'spacer',
                size: 'sm'
              }
            ]
          }
        },
        {
          type: 'bubble',
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: 'โรงพยาบาลรามาธิบดี',
                size: 'xl',
                weight: 'bold',
                wrap: true
              },
              {
                type: 'box',
                layout: 'vertical',
                spacing: 'sm',
                margin: 'lg',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'Place',
                        // flex: 1,
                        size: 'sm',
                        color: '#AAAAAA'
                      },
                      {
                        type: 'text',
                        text: 'ห้องบริจาคโลหิต ชั้น 2 อาคารหลัก (อาคาร1)',
                        // flex: 5,
                        size: 'sm',
                        color: '#666666',
                        wrap: true
                      }
                    ]
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: 'Time',
                        // flex: 1,
                        size: 'sm',
                        color: '#AAAAAA'
                      },
                      {
                        type: 'text',
                        text: 'ทุกวัน 08.30 – 12.00 น. และ 13.00 – 16.30 น.',
                        // flex: 5,
                        size: 'sm',
                        color: '#666666',
                        wrap: true
                      }
                    ]
                  }
                ]
              }
            ]
          },
          footer: {
            type: 'box',
            layout: 'vertical',
            // flex: 0,
            spacing: 'sm',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: 'นำทาง',
                  uri: 'https://www.google.com/maps/place/Ramathibodi+Hospital/@13.766043,100.524511,17z/data=!3m1!4b1!4m5!3m4!1s0x30e2994da99aa1fd:0xc4dd9b398f456bcf!8m2!3d13.7660378!4d100.5266997'
                },
                height: 'sm',
                style: 'link'
              },
              {
                type: 'spacer',
                size: 'sm'
              }
            ]
          }
        }
      ]
    }
  };
  const payload = new dialogflow.Payload('LINE', payloadJson, { sendAsMessage: true });
  agent.add(payload);

}

module.exports = handleFindLocation;