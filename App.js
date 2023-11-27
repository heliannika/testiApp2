import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

export default function App() {

  // Helsinki

  const [data, setData] = useState([]);
  const [vaestotiheys, setVaestotiheys] = useState([]);
  const [asunnot, setAsunnot] = useState([]);
  const [koulutustaso, setKoulutustaso] = useState([]);
  const [tyoikaiset, setTyoikaiset] = useState([]);
  const [tyopaikat, setTyopaikat] = useState([]);
  const [tyovoima, setTyovoima] = useState([]);
  const [ikaryhmittain, setIkaryhmittain] = useState([]);
  const [spjaikavakiluku, setSpjaikavakiluku] = useState([]);
  const [spjassvakiluku, setSpjassvakiluku] = useState([]);
  const [vaestonennuste, setVaestonennuste] = useState([]);

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

  const vaestoikaryhmittain = () => {
    fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/2_Vaesto/2-1NS_Vaesto_ikaryhmittan.px", {
      method: "POST",
      body: JSON.stringify({
        "query": [
          {
            "code": "Alue",
            "selection": {
              "filter": "agg:Suomi.agg",
              "values": [
                "3"
              ]
            }
          },
          {
            "code": "Ikä",
            "selection": {
              "filter": "item",
              "values": [
                "020",
                "030",
                "040"
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
      .then((json) => setIkaryhmittain(json.dataset.value));
  }

  const vakilukuikajasp = () => {
    fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/2_Vaesto/2-2NS_Vaesto_ian_ja_sukupuolen_mukaan.px", {
      method: "POST",
      body: JSON.stringify({
        "query": [
          {
            "code": "Alue",
            "selection": {
              "filter": "agg:Suomi.agg",
              "values": [
                "3"
              ]
            }
          },
          {
            "code": "Ikä",
            "selection": {
              "filter": "item",
              "values": [
                "999V"
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
      .then((json) => setSpjaikavakiluku(json.dataset.value));
  }  

  const vakilukuspjass = () => {
    fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/2_Vaesto/2-3NS_Vaesto_sukupuolen_ja_siviilisaadyn_mukaan.px", {
      method: "POST",
      body: JSON.stringify({
        "query": [
          {
            "code": "Alue",
            "selection": {
              "filter": "agg:Suomi.agg",
              "values": [
                "3"
              ]
            }
          },
          {
            "code": "Siviilisääty",
            "selection": {
              "filter": "item",
              "values": [
                "12"
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
      .then((json) => setSpjassvakiluku(json.dataset.value));
  }  

  const vaestonkehitysjaennuste = () => {
    fetch("https://stat.hel.fi:443/api/v1/fi/Nordstat/2_Vaesto/2-4NS_Vaestokehitys_ja_ennuste.px", {
      method: "POST",
      body: JSON.stringify({
        "query": [
          {
            "code": "Alue",
            "selection": {
              "filter": "agg:Suomi.agg",
              "values": [
                "3"
              ]
            }
          },
          {
            "code": "Vuosi",
            "selection": {
              "filter": "item",
              "values": [
                "2050"
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
      .then((json) => setVaestonennuste(json.dataset.value));
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

  useEffect(() => {
    vaestoikaryhmittain()
  }, [])

  useEffect(() => {
    vakilukuikajasp()
  }, [])

  useEffect(() => {
    vakilukuspjass()
  }, [])

  useEffect(() => {
    vaestonkehitysjaennuste()
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
      <Text>Väestö ikäryhmittäin</Text>
      <Text>{ikaryhmittain}</Text>
      <Text>Väkiluku iän ja sukupuolen mukaan</Text>
      <Text>{spjaikavakiluku}</Text>
      <Text>Väkiluku sukupuolen ja siviilisäädyn mukaan</Text>
      <Text>{spjassvakiluku}</Text>
      <Text>Väestön kehitys ja ennuste</Text>
      <Text>{vaestonennuste}</Text>
    </View>
  )
}
