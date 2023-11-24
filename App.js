import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

export default function App() {

  const [data, setData] = useState([]);
  const [vaestotiheys, setVaestotiheys] = useState([]);
  const [asunnot, setAsunnot] = useState([]);
  const [koulutustaso, setKoulutustaso] = useState([]);
  const [tyoikaiset, setTyoikaiset] = useState([]);
  const [tyopaikat, setTyopaikat] = useState([]);
  const [tyovoima, setTyovoima] = useState([]);

  const koulutusvuosia = () => {
    fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
  method: "POST",
  body: JSON.stringify({
    "query": [
      {
        "code": "Alue",
        "selection": {
          "filter": "agg:Suomi.agg",
          "values": [
            "3",
            "5"
          ]
        }
      },
      {
        "code": "Koulutusvuosia",
        "selection": {
          "filter": "item",
          "values": [
            "03"
          ]
        }
      },
      {
        "code": "Vuosi",
        "selection": {
          "filter": "item",
          "values": [
            "2019",
            "2020"
          ]
        }
      }
    ],
    "response": {
      "format": "json-stat"
    }
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => setData(json.dataset.value));
}
 
//   useEffect(() => {
//   fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
//   method: "POST",
//   body: JSON.stringify({
//     "query": [
//       {
//         "code": "Alue",
//         "selection": {
//           "filter": "agg:Suomi.agg",
//           "values": [
//             "3",
//             "5"
//           ]
//         }
//       },
//       {
//         "code": "Koulutusvuosia",
//         "selection": {
//           "filter": "item",
//           "values": [
//             "03"
//           ]
//         }
//       },
//       {
//         "code": "Vuosi",
//         "selection": {
//           "filter": "item",
//           "values": [
//             "2019",
//             "2020"
//           ]
//         }
//       }
//     ],
//     "response": {
//       "format": "json-stat"
//     }
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// })
//   .then((response) => response.json())
//   .then((json) => setData(json.dataset.value));
//   })

const vaestotiheydet = () => {
  fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/1_Alue/1-2_Pinta-ala_ja_vaestontiheys.px", {
    method: "POST",
    body: JSON.stringify({
      "query": [
        {
          "code": "Alue",
          "selection": {
            "filter": "item",
            "values": [
              "202"
            ]
          }
        },
        {
          "code": "Tieto",
          "selection": {
            "filter": "item",
            "values": [
              "10"
            ]
          }
        },
        {
          "code": "Vuosi",
          "selection": {
            "filter": "item",
            "values": [
              "2022"
            ]
          }
        }
      ],
      "response": {
        "format": "json-stat"
      }
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((json) => setVaestotiheys(json.dataset.value));
}

  // useEffect(() => {
  //   fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/1_Alue/1-2_Pinta-ala_ja_vaestontiheys.px", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     "query": [
  //       {
  //         "code": "Alue",
  //         "selection": {
  //           "filter": "item",
  //           "values": [
  //             "202"
  //           ]
  //         }
  //       },
  //       {
  //         "code": "Tieto",
  //         "selection": {
  //           "filter": "item",
  //           "values": [
  //             "10"
  //           ]
  //         }
  //       },
  //       {
  //         "code": "Vuosi",
  //         "selection": {
  //           "filter": "item",
  //           "values": [
  //             "2022"
  //           ]
  //         }
  //       }
  //     ],
  //     "response": {
  //       "format": "json-stat"
  //     }
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8"
  //   }
  // })
  //   .then((response) => response.json())
  //   .then((json) => setVaestotiheys(json.dataset.value));
  //   })

  const asuntotuotanto = () => {
    fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/5_Asuminen_ja_rakentaminen/5-3NS_Asuntotuotanto.px", {
      method: "POST",
      body: JSON.stringify({
        "query": [
          {
            "code": "Alue",
            "selection": {
              "filter": "item",
              "values": [
                "202"
              ]
            }
          },
          {
            "code": "Huoneluku",
            "selection": {
              "filter": "item",
              "values": [
                "00"
              ]
            }
          },
          {
            "code": "Vuosi",
            "selection": {
              "filter": "item",
              "values": [
                "2021"
              ]
            }
          }
        ],
        "response": {
          "format": "json-stat"
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => setAsunnot(json.dataset.value));
  }

  const koulutusvuodet = () => {
    fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/6_Koulutustaso/6-1NS_Vaeston_koulutus.px", {
      method: "POST",
      body: JSON.stringify({
        "query": [
          {
            "code": "Alue",
            "selection": {
              "filter": "item",
              "values": [
                "202"
              ]
            }
          },
          {
            "code": "Koulutusvuosia",
            "selection": {
              "filter": "item",
              "values": [
                "03"
              ]
            }
          },
          {
            "code": "Vuosi",
            "selection": {
              "filter": "item",
              "values": [
                "2021"
              ]
            }
          }
        ],
        "response": {
          "format": "json-stat"
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => setKoulutustaso(json.dataset.value));
  }

  const tyoikaisia = () => {
    fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-1NS_Tyoikainen_vaesto.px", {
      method: "POST",
      body: JSON.stringify({
        "query": [
          {
            "code": "Alue",
            "selection": {
              "filter": "item",
              "values": [
                "202"
              ]
            }
          },
          {
            "code": "Ikä",
            "selection": {
              "filter": "item",
              "values": [
                "00"
              ]
            }
          },
          {
            "code": "Sukupuoli",
            "selection": {
              "filter": "item",
              "values": [
                "00"
              ]
            }
          },
          {
            "code": "Vuosi",
            "selection": {
              "filter": "item",
              "values": [
                "2021"
              ]
            }
          }
        ],
        "response": {
          "format": "json-stat"
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => setTyoikaiset(json.dataset.value));
  }

  const tyopaikkoja = () => {
    fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-2aNS_Tyopaikat_TOL2008.px", {
      method: "POST",
      body: JSON.stringify({
        "query": [
          {
            "code": "Alue",
            "selection": {
              "filter": "item",
              "values": [
                "202"
              ]
            }
          },
          {
            "code": "Toimiala",
            "selection": {
              "filter": "item",
              "values": [
                "00"
              ]
            }
          },
          {
            "code": "Vuosi",
            "selection": {
              "filter": "item",
              "values": [
                "2021"
              ]
            }
          }
        ],
        "response": {
          "format": "json-stat"
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => setTyopaikat(json.dataset.value));
  }

  const tyollinentyovoima = () => {
    fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/4_Tyomarkkinat/4-3NS_Tyollinen_tyovoima.px", {
      method: "POST",
      body: JSON.stringify({
        "query": [
          {
            "code": "Alue",
            "selection": {
              "filter": "item",
              "values": [
                "202"
              ]
            }
          },
          {
            "code": "Ikä",
            "selection": {
              "filter": "item",
              "values": [
                "00"
              ]
            }
          },
          {
            "code": "Sukupuoli",
            "selection": {
              "filter": "item",
              "values": [
                "00"
              ]
            }
          },
          {
            "code": "Vuosi",
            "selection": {
              "filter": "item",
              "values": [
                "2021"
              ]
            }
          }
        ],
        "response": {
          "format": "json-stat"
        }
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => setTyovoima(json.dataset.value));
  }

  useEffect(() => {
    koulutusvuosia()
  }, [])

  useEffect(() => {
    vaestotiheydet()
  }, [])

  useEffect(() => {
    asuntotuotanto()
  }, [])

  useEffect(() => {
    koulutusvuodet()
  }, [])

  useEffect(() => {
    tyoikaisia()
  }, [])

  useEffect(() => {
    tyopaikkoja()
  }, [])

  useEffect(() => {
    tyollinentyovoima()
  }, [])

  return(
    <View>
      <Text>Koulutusvuosia</Text>
      <Text>{data}</Text>
      <Text>Väestötiheys</Text>
      <Text>{vaestotiheys}</Text>
      <Text>Asuntotuotanto</Text>
      <Text>{asunnot}</Text>
      <Text>13+ koulutusvuotta</Text>
      <Text>{koulutustaso}</Text>
      <Text>Työikäisiä</Text>
      <Text>{tyoikaiset}</Text>
      <Text>Työpaikkoja</Text>
      <Text>{tyopaikat}</Text>
      <Text>Työvoima</Text>
      <Text>{tyovoima}</Text>
    </View>
  )
}
