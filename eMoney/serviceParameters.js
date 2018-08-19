const json = `{
    "1": {
         "Parameters": [
              {
                   "Description": "eMoney Account",
                   "ID": "120",
                   "Mask": "^\\d{9}$",
                   "Name": "account",
                   "ServiceID": "1",
                   "Tooltip": "eMoney Account",
                   "Type": "Text"
              },
              {
                   "ID": "136",
                   "Mask": "[\\s\\S]*",
                   "Name": "description",
                   "ServiceID": "1",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "eMoney",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/0001.png",
              "MaxAmount": "2000",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1",
              "ServiceType": "Standard"
         }
    },
    "2": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "336",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "2",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "CDMA VASTOK",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/2.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "2",
              "ServiceType": "Standard"
         }
    },
    "3": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "339",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "3",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Amigo",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/3.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "3",
              "ServiceType": "Standard"
         }
    },
    "4": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "340",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "4",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "LIFE (Belarus)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/4.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4",
              "ServiceType": "Standard"
         }
    },
    "5": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "341",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "5",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "sipnet",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/5.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "5",
              "ServiceType": "Standard"
         }
    },
    "6": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "342",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "6",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "tele2",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/6.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "6",
              "ServiceType": "Standard"
         }
    },
    "1000": {
         "Parameters": {
              "Description": "KazTransGaz მომხმარებლის ნომერი",
              "ID": "1",
              "Mask": "(^\\d{9}$|^\\d{6}-\\d{3}$)",
              "Name": "customercode",
              "ServiceID": "1000",
              "Tooltip": "KazTransGaz მომხმარებლის ნომერი \"-\" გარეშე",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "KazTransGas",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1000.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1000",
              "ServiceType": "Standard"
         }
    },
    "1001": {
         "Parameters": {
              "Description": "თელასის აბონენტის ნომერი",
              "ID": "3",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1001",
              "Tooltip": "აბონენტი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Telasi",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1001.png",
              "MaxAmount": "4000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1001",
              "ServiceType": "Standard"
         }
    },
    "1002": {
         "Parameters": {
              "Description": "დასუფთავების სერვისის აბონენტის ნომერი",
              "ID": "4",
              "Mask": "^\\d{7}$",
              "Name": "customercode",
              "ServiceID": "1002",
              "Tooltip": "აბონენტი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Tbilisi cleaning service",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1002.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1002",
              "ServiceType": "Standard"
         }
    },
    "1003": {
         "Parameters": {
              "Description": "GWP აბონენტის ნომერი",
              "ID": "5",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1003",
              "Tooltip": "აბონენტი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "GWP Georgian Water and Power",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1003.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1003",
              "ServiceType": "Standard"
         }
    },
    "1004": {
         "Parameters": [
              {
                   "Description": "ტელეფონის ნომერი",
                   "ID": "56",
                   "Mask": "^\\d+$",
                   "Name": "phonenumber",
                   "ServiceID": "1004",
                   "Tooltip": "ტელეფონის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "ქალაქი",
                   "ID": "57",
                   "Mask": "^\\d+$",
                   "Name": "city",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "4",
                                  "Name": "თბილისი",
                                  "ParameterID": "57",
                                  "Value": "32"
                             },
                             {
                                  "ID": "5",
                                  "Name": "აბაშა",
                                  "ParameterID": "57",
                                  "Value": "412"
                             },
                             {
                                  "ID": "6",
                                  "Name": "ადიგენი",
                                  "ParameterID": "57",
                                  "Value": "366"
                             },
                             {
                                  "ID": "7",
                                  "Name": "ამბროლაური",
                                  "ParameterID": "57",
                                  "Value": "439"
                             },
                             {
                                  "ID": "8",
                                  "Name": "ასპინძა",
                                  "ParameterID": "57",
                                  "Value": "364"
                             },
                             {
                                  "ID": "9",
                                  "Name": "ახალქალაქი",
                                  "ParameterID": "57",
                                  "Value": "362"
                             },
                             {
                                  "ID": "10",
                                  "Name": "ახალციხე",
                                  "ParameterID": "57",
                                  "Value": "365"
                             },
                             {
                                  "ID": "11",
                                  "Name": "ახმეტა",
                                  "ParameterID": "57",
                                  "Value": "349"
                             },
                             {
                                  "ID": "12",
                                  "Name": "ბათუმი",
                                  "ParameterID": "57",
                                  "Value": "422"
                             },
                             {
                                  "ID": "13",
                                  "Name": "ბაღდათი",
                                  "ParameterID": "57",
                                  "Value": "434"
                             },
                             {
                                  "ID": "14",
                                  "Name": "ბოლნისი",
                                  "ParameterID": "57",
                                  "Value": "358"
                             },
                             {
                                  "ID": "15",
                                  "Name": "ბორჯომი",
                                  "ParameterID": "57",
                                  "Value": "367"
                             },
                             {
                                  "ID": "16",
                                  "Name": "გარდაბანი",
                                  "ParameterID": "57",
                                  "Value": "372"
                             },
                             {
                                  "ID": "17",
                                  "Name": "გორი",
                                  "ParameterID": "57",
                                  "Value": "370"
                             },
                             {
                                  "ID": "18",
                                  "Name": "გურჯაანი",
                                  "ParameterID": "57",
                                  "Value": "353"
                             },
                             {
                                  "ID": "19",
                                  "Name": "დედოფლისწყარო",
                                  "ParameterID": "57",
                                  "Value": "356"
                             },
                             {
                                  "ID": "20",
                                  "Name": "დმანისი",
                                  "ParameterID": "57",
                                  "Value": "360"
                             },
                             {
                                  "ID": "21",
                                  "Name": "დუშეთი",
                                  "ParameterID": "57",
                                  "Value": "346"
                             },
                             {
                                  "ID": "22",
                                  "Name": "ვანი",
                                  "ParameterID": "57",
                                  "Value": "432"
                             },
                             {
                                  "ID": "23",
                                  "Name": "ზესტაფონი",
                                  "ParameterID": "57",
                                  "Value": "492"
                             },
                             {
                                  "ID": "24",
                                  "Name": "ზუგდიდი",
                                  "ParameterID": "57",
                                  "Value": "415"
                             },
                             {
                                  "ID": "25",
                                  "Name": "თეთრიწყარო",
                                  "ParameterID": "57",
                                  "Value": "359"
                             },
                             {
                                  "ID": "26",
                                  "Name": "თელავი",
                                  "ParameterID": "57",
                                  "Value": "350"
                             },
                             {
                                  "ID": "27",
                                  "Name": "თერჯოლა",
                                  "ParameterID": "57",
                                  "Value": "491"
                             },
                             {
                                  "ID": "28",
                                  "Name": "თიანეთი",
                                  "ParameterID": "57",
                                  "Value": "348"
                             },
                             {
                                  "ID": "29",
                                  "Name": "კასპი",
                                  "ParameterID": "57",
                                  "Value": "371"
                             },
                             {
                                  "ID": "30",
                                  "Name": "ლაგოდეხი",
                                  "ParameterID": "57",
                                  "Value": "354"
                             },
                             {
                                  "ID": "31",
                                  "Name": "ლანჩხუთი",
                                  "ParameterID": "57",
                                  "Value": "494"
                             },
                             {
                                  "ID": "32",
                                  "Name": "მარნეული",
                                  "ParameterID": "57",
                                  "Value": "357"
                             },
                             {
                                  "ID": "33",
                                  "Name": "მარტვილი",
                                  "ParameterID": "57",
                                  "Value": "418"
                             },
                             {
                                  "ID": "34",
                                  "Name": "მობილური (570)",
                                  "ParameterID": "57",
                                  "Value": "570"
                             },
                             {
                                  "ID": "35",
                                  "Name": "ნინოწმინდა",
                                  "ParameterID": "57",
                                  "Value": "361"
                             },
                             {
                                  "ID": "36",
                                  "Name": "ოზურგეთი",
                                  "ParameterID": "57",
                                  "Value": "496"
                             },
                             {
                                  "ID": "37",
                                  "Name": "რუსთავი",
                                  "ParameterID": "57",
                                  "Value": "341"
                             },
                             {
                                  "ID": "38",
                                  "Name": "საგარეჯო",
                                  "ParameterID": "57",
                                  "Value": "351"
                             },
                             {
                                  "ID": "39",
                                  "Name": "სამტრედია",
                                  "ParameterID": "57",
                                  "Value": "411"
                             },
                             {
                                  "ID": "40",
                                  "Name": "საჩხერე",
                                  "ParameterID": "57",
                                  "Value": "435"
                             },
                             {
                                  "ID": "41",
                                  "Name": "სენაკი",
                                  "ParameterID": "57",
                                  "Value": "413"
                             },
                             {
                                  "ID": "42",
                                  "Name": "სიღნაღი",
                                  "ParameterID": "57",
                                  "Value": "355"
                             },
                             {
                                  "ID": "43",
                                  "Name": "ტყიბული",
                                  "ParameterID": "57",
                                  "Value": "497"
                             },
                             {
                                  "ID": "44",
                                  "Name": "ფოთი",
                                  "ParameterID": "57",
                                  "Value": "493"
                             },
                             {
                                  "ID": "45",
                                  "Name": "ქარელი",
                                  "ParameterID": "57",
                                  "Value": "369"
                             },
                             {
                                  "ID": "46",
                                  "Name": "ქედა",
                                  "ParameterID": "57",
                                  "Value": "425"
                             },
                             {
                                  "ID": "47",
                                  "Name": "ქობულეთი",
                                  "ParameterID": "57",
                                  "Value": "426"
                             },
                             {
                                  "ID": "48",
                                  "Name": "ქუთაისი",
                                  "ParameterID": "57",
                                  "Value": "431"
                             },
                             {
                                  "ID": "49",
                                  "Name": "ყაზბეგი",
                                  "ParameterID": "57",
                                  "Value": "345"
                             },
                             {
                                  "ID": "50",
                                  "Name": "ყვარელი",
                                  "ParameterID": "57",
                                  "Value": "352"
                             },
                             {
                                  "ID": "51",
                                  "Name": "შუახევი",
                                  "ParameterID": "57",
                                  "Value": "424"
                             },
                             {
                                  "ID": "52",
                                  "Name": "ჩოხატაური",
                                  "ParameterID": "57",
                                  "Value": "419"
                             },
                             {
                                  "ID": "53",
                                  "Name": "ჩხოროწყუ",
                                  "ParameterID": "57",
                                  "Value": "417"
                             },
                             {
                                  "ID": "54",
                                  "Name": "ცაგერი",
                                  "ParameterID": "57",
                                  "Value": "472"
                             },
                             {
                                  "ID": "55",
                                  "Name": "წალენჯიხა",
                                  "ParameterID": "57",
                                  "Value": "416"
                             },
                             {
                                  "ID": "56",
                                  "Name": "წალკა",
                                  "ParameterID": "57",
                                  "Value": "363"
                             },
                             {
                                  "ID": "57",
                                  "Name": "წყალტუბო",
                                  "ParameterID": "57",
                                  "Value": "436"
                             },
                             {
                                  "ID": "58",
                                  "Name": "ჭიათურა",
                                  "ParameterID": "57",
                                  "Value": "479"
                             },
                             {
                                  "ID": "59",
                                  "Name": "ხარაგაული",
                                  "ParameterID": "57",
                                  "Value": "433"
                             },
                             {
                                  "ID": "60",
                                  "Name": "ხაშური",
                                  "ParameterID": "57",
                                  "Value": "368"
                             },
                             {
                                  "ID": "61",
                                  "Name": "ხობი",
                                  "ParameterID": "57",
                                  "Value": "414"
                             },
                             {
                                  "ID": "62",
                                  "Name": "ხონი",
                                  "ParameterID": "57",
                                  "Value": "495"
                             },
                             {
                                  "ID": "63",
                                  "Name": "ხულო",
                                  "ParameterID": "57",
                                  "Value": "423"
                             }
                        ]
                   },
                   "ServiceID": "1004",
                   "Tooltip": "ქალაქი",
                   "Type": "List"
              },
              {
                   "Description": null,
                   "ID": "58",
                   "Mask": "^(\\s*|\\d+)$",
                   "Name": "accountnumber",
                   "ServiceID": "1004",
                   "Tooltip": null,
                   "Type": "HiddenEmptyField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Silknet Phone",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1004.png",
              "MaxAmount": "500",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1004",
              "ServiceType": "Standard"
         }
    },
    "1005": {
         "Parameters": {
              "Description": "ტელეფონის ნომერი",
              "ID": "60",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1005",
              "Tooltip": "YYXXXXXXX; YY-ქალაქის კოდი; XXXXXXX– აბონენტის ნომერი. თბილისი (კოდი – 32),\r\nქუთაისი (კოდი – 431),\r\nზესტაფონი (კოდი – 492),\r\nთერჯოლა (კოდი – 491),\r\nფოთი (კოდი – 493)",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Akhali Kselebi",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1005.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1005",
              "ServiceType": "Standard"
         }
    },
    "1006": {
         "Parameters": [
              {
                   "Description": "ტელეფონის ნომერი",
                   "ID": "61",
                   "Mask": "^\\d+$",
                   "Name": "phonenumber",
                   "ServiceID": "1006",
                   "Tooltip": "ტელეფონის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "ქალაქი",
                   "ID": "62",
                   "Mask": "^\\d+$",
                   "Name": "city",
                   "Parameters": {
                        "ParameterReference": {
                             "ID": "70",
                             "Name": "თბილისი",
                             "ParameterID": "62",
                             "Value": "32"
                        }
                   },
                   "ServiceID": "1006",
                   "Tooltip": "ქალაქი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Akhteli",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1006.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1006",
              "ServiceType": "Standard"
         }
    },
    "1007": {
         "Parameters": [
              {
                   "Description": "მობილურის ნომერი",
                   "ID": "7",
                   "Mask": "^\\d{9}$",
                   "Name": "mobilenumber",
                   "ServiceID": "1007",
                   "Tooltip": "მობილურის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "0",
                   "ID": "291",
                   "Mask": "^\\d+$",
                   "Name": "externalresult",
                   "ServiceID": "1007",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Magti",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1007.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0.01",
              "Rounding": "0.01",
              "ServiceID": "1007",
              "ServiceType": "Standard"
         }
    },
    "1008": {
         "Parameters": [
              {
                   "Description": "2",
                   "ID": "293",
                   "Mask": "^\\d+$",
                   "Name": "externalresult",
                   "ServiceID": "1008",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "მობილურის ნომერი",
                   "ID": "8",
                   "Mask": "^\\d{9}$",
                   "Name": "mobilenumber",
                   "ServiceID": "1008",
                   "Tooltip": "მობილურის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "ბალის სერვისი",
                   "ID": "294",
                   "Mask": "^\\d+$",
                   "Name": "indicator",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "202",
                                  "Name": "#1 სერვისი. ბალი - ლოკალური ზარები",
                                  "ParameterID": "294",
                                  "Value": "1"
                             },
                             {
                                  "ID": "203",
                                  "Name": "#2 სერვისი. მაგთი + ბალი",
                                  "ParameterID": "294",
                                  "Value": "2"
                             },
                             {
                                  "ID": "204",
                                  "Name": "#3 სერვისი. \"საყვარელი ნომერი\"",
                                  "ParameterID": "294",
                                  "Value": "3"
                             },
                             {
                                  "ID": "205",
                                  "Name": "#4 SMS-სერვისი",
                                  "ParameterID": "294",
                                  "Value": "4"
                             },
                             {
                                  "ID": "206",
                                  "Name": "#5 MMS-სერვისი",
                                  "ParameterID": "294",
                                  "Value": "5"
                             },
                             {
                                  "ID": "207",
                                  "Name": "#6 ინტერნეტ-სერვისი",
                                  "ParameterID": "294",
                                  "Value": "6"
                             },
                             {
                                  "ID": "208",
                                  "Name": "#7 სერვისი. ბალი - 2თეთრი",
                                  "ParameterID": "294",
                                  "Value": "7"
                             },
                             {
                                  "ID": "210",
                                  "Name": "#9 სერვისი. ბალი – ჯეოსელი და ბილაინი",
                                  "ParameterID": "294",
                                  "Value": "9"
                             },
                             {
                                  "ID": "241",
                                  "Name": "#99 სერვისი ლარის ანგარიში",
                                  "ParameterID": "294",
                                  "Value": "99"
                             }
                        ]
                   },
                   "ServiceID": "1008",
                   "Tooltip": "ბალის სერვისები",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Bali",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1008.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0.01",
              "Rounding": "0.01",
              "ServiceID": "1008",
              "ServiceType": "Standard"
         }
    },
    "1009": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "316",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1009",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "OnlineExpress",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1009.png",
              "MaxAmount": "1499",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1009",
              "ServiceType": "Standard"
         }
    },
    "1010": {
         "Parameters": [
              {
                   "Description": "ტელეფონის ნომერი",
                   "ID": "63",
                   "Mask": "^\\d+$",
                   "Name": "phonenumber",
                   "ServiceID": "1010",
                   "Tooltip": "ტელეფონის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "ქალაქი",
                   "ID": "64",
                   "Mask": "^\\d+$",
                   "Name": "city",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "71",
                                  "Name": "თბილისი",
                                  "ParameterID": "64",
                                  "Value": "32"
                             },
                             {
                                  "ID": "72",
                                  "Name": "აბაშა",
                                  "ParameterID": "64",
                                  "Value": "412"
                             },
                             {
                                  "ID": "73",
                                  "Name": "ადიგენი",
                                  "ParameterID": "64",
                                  "Value": "366"
                             },
                             {
                                  "ID": "74",
                                  "Name": "ამბროლაური",
                                  "ParameterID": "64",
                                  "Value": "439"
                             },
                             {
                                  "ID": "75",
                                  "Name": "ასპინძა",
                                  "ParameterID": "64",
                                  "Value": "364"
                             },
                             {
                                  "ID": "76",
                                  "Name": "ახალქალაქი",
                                  "ParameterID": "64",
                                  "Value": "362"
                             },
                             {
                                  "ID": "77",
                                  "Name": "ახალციხე",
                                  "ParameterID": "64",
                                  "Value": "365"
                             },
                             {
                                  "ID": "78",
                                  "Name": "ახმეტა",
                                  "ParameterID": "64",
                                  "Value": "349"
                             },
                             {
                                  "ID": "79",
                                  "Name": "ბათუმი",
                                  "ParameterID": "64",
                                  "Value": "422"
                             },
                             {
                                  "ID": "80",
                                  "Name": "ბაღდათი",
                                  "ParameterID": "64",
                                  "Value": "434"
                             },
                             {
                                  "ID": "81",
                                  "Name": "ბოლნისი",
                                  "ParameterID": "64",
                                  "Value": "358"
                             },
                             {
                                  "ID": "82",
                                  "Name": "ბორჯომი",
                                  "ParameterID": "64",
                                  "Value": "367"
                             },
                             {
                                  "ID": "83",
                                  "Name": "გარდაბანი",
                                  "ParameterID": "64",
                                  "Value": "372"
                             },
                             {
                                  "ID": "84",
                                  "Name": "გორი",
                                  "ParameterID": "64",
                                  "Value": "370"
                             },
                             {
                                  "ID": "85",
                                  "Name": "გურჯაანი",
                                  "ParameterID": "64",
                                  "Value": "353"
                             },
                             {
                                  "ID": "86",
                                  "Name": "დედოფლისწყარო",
                                  "ParameterID": "64",
                                  "Value": "356"
                             },
                             {
                                  "ID": "87",
                                  "Name": "დმანისი",
                                  "ParameterID": "64",
                                  "Value": "360"
                             },
                             {
                                  "ID": "88",
                                  "Name": "დუშეთი",
                                  "ParameterID": "64",
                                  "Value": "346"
                             },
                             {
                                  "ID": "89",
                                  "Name": "ვანი",
                                  "ParameterID": "64",
                                  "Value": "432"
                             },
                             {
                                  "ID": "90",
                                  "Name": "ზესტაფონი",
                                  "ParameterID": "64",
                                  "Value": "492"
                             },
                             {
                                  "ID": "91",
                                  "Name": "ზუგდიდი",
                                  "ParameterID": "64",
                                  "Value": "415"
                             },
                             {
                                  "ID": "92",
                                  "Name": "თეთრიწყარო",
                                  "ParameterID": "64",
                                  "Value": "359"
                             },
                             {
                                  "ID": "93",
                                  "Name": "თელავი",
                                  "ParameterID": "64",
                                  "Value": "350"
                             },
                             {
                                  "ID": "94",
                                  "Name": "თერჯოლა",
                                  "ParameterID": "64",
                                  "Value": "491"
                             },
                             {
                                  "ID": "95",
                                  "Name": "თიანეთი",
                                  "ParameterID": "64",
                                  "Value": "348"
                             },
                             {
                                  "ID": "96",
                                  "Name": "კასპი",
                                  "ParameterID": "64",
                                  "Value": "371"
                             },
                             {
                                  "ID": "97",
                                  "Name": "ლაგოდეხი",
                                  "ParameterID": "64",
                                  "Value": "354"
                             },
                             {
                                  "ID": "98",
                                  "Name": "ლანჩხუთი",
                                  "ParameterID": "64",
                                  "Value": "494"
                             },
                             {
                                  "ID": "99",
                                  "Name": "მარნეული",
                                  "ParameterID": "64",
                                  "Value": "357"
                             },
                             {
                                  "ID": "100",
                                  "Name": "მარტვილი",
                                  "ParameterID": "64",
                                  "Value": "418"
                             },
                             {
                                  "ID": "101",
                                  "Name": "მობილური (570)",
                                  "ParameterID": "64",
                                  "Value": "570"
                             },
                             {
                                  "ID": "102",
                                  "Name": "ნინოწმინდა",
                                  "ParameterID": "64",
                                  "Value": "361"
                             },
                             {
                                  "ID": "103",
                                  "Name": "ოზურგეთი",
                                  "ParameterID": "64",
                                  "Value": "496"
                             },
                             {
                                  "ID": "104",
                                  "Name": "რუსთავი",
                                  "ParameterID": "64",
                                  "Value": "341"
                             },
                             {
                                  "ID": "105",
                                  "Name": "საგარეჯო",
                                  "ParameterID": "64",
                                  "Value": "351"
                             },
                             {
                                  "ID": "106",
                                  "Name": "სამტრედია",
                                  "ParameterID": "64",
                                  "Value": "411"
                             },
                             {
                                  "ID": "107",
                                  "Name": "საჩხერე",
                                  "ParameterID": "64",
                                  "Value": "435"
                             },
                             {
                                  "ID": "108",
                                  "Name": "სენაკი",
                                  "ParameterID": "64",
                                  "Value": "413"
                             },
                             {
                                  "ID": "109",
                                  "Name": "სიღნაღი",
                                  "ParameterID": "64",
                                  "Value": "355"
                             },
                             {
                                  "ID": "110",
                                  "Name": "ტყიბული",
                                  "ParameterID": "64",
                                  "Value": "497"
                             },
                             {
                                  "ID": "111",
                                  "Name": "ფოთი",
                                  "ParameterID": "64",
                                  "Value": "493"
                             },
                             {
                                  "ID": "112",
                                  "Name": "ქარელი",
                                  "ParameterID": "64",
                                  "Value": "369"
                             },
                             {
                                  "ID": "113",
                                  "Name": "ქედა",
                                  "ParameterID": "64",
                                  "Value": "425"
                             },
                             {
                                  "ID": "114",
                                  "Name": "ქობულეთი",
                                  "ParameterID": "64",
                                  "Value": "426"
                             },
                             {
                                  "ID": "115",
                                  "Name": "ქუთაისი",
                                  "ParameterID": "64",
                                  "Value": "431"
                             },
                             {
                                  "ID": "116",
                                  "Name": "ყაზბეგი",
                                  "ParameterID": "64",
                                  "Value": "345"
                             },
                             {
                                  "ID": "117",
                                  "Name": "ყვარელი",
                                  "ParameterID": "64",
                                  "Value": "352"
                             },
                             {
                                  "ID": "118",
                                  "Name": "შუახევი",
                                  "ParameterID": "64",
                                  "Value": "424"
                             },
                             {
                                  "ID": "119",
                                  "Name": "ჩოხატაური",
                                  "ParameterID": "64",
                                  "Value": "419"
                             },
                             {
                                  "ID": "120",
                                  "Name": "ჩხოროწყუ",
                                  "ParameterID": "64",
                                  "Value": "417"
                             },
                             {
                                  "ID": "121",
                                  "Name": "ცაგერი",
                                  "ParameterID": "64",
                                  "Value": "472"
                             },
                             {
                                  "ID": "122",
                                  "Name": "წალენჯიხა",
                                  "ParameterID": "64",
                                  "Value": "416"
                             },
                             {
                                  "ID": "123",
                                  "Name": "წალკა",
                                  "ParameterID": "64",
                                  "Value": "363"
                             },
                             {
                                  "ID": "124",
                                  "Name": "წყალტუბო",
                                  "ParameterID": "64",
                                  "Value": "436"
                             },
                             {
                                  "ID": "125",
                                  "Name": "ჭიათურა",
                                  "ParameterID": "64",
                                  "Value": "479"
                             },
                             {
                                  "ID": "126",
                                  "Name": "ხარაგაული",
                                  "ParameterID": "64",
                                  "Value": "433"
                             },
                             {
                                  "ID": "127",
                                  "Name": "ხაშური",
                                  "ParameterID": "64",
                                  "Value": "368"
                             },
                             {
                                  "ID": "128",
                                  "Name": "ხობი",
                                  "ParameterID": "64",
                                  "Value": "414"
                             },
                             {
                                  "ID": "129",
                                  "Name": "ხონი",
                                  "ParameterID": "64",
                                  "Value": "495"
                             },
                             {
                                  "ID": "130",
                                  "Name": "ხულო",
                                  "ParameterID": "64",
                                  "Value": "423"
                             }
                        ]
                   },
                   "ServiceID": "1010",
                   "Tooltip": "ქალაქი",
                   "Type": "List"
              },
              {
                   "Description": "სერვისი",
                   "ID": "65",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": {
                             "ID": "136",
                             "Name": "807",
                             "ParameterID": "65",
                             "Value": "3"
                        }
                   },
                   "ServiceID": "1010",
                   "Tooltip": "სერვისი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Caucasus online",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1010.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1010",
              "ServiceType": "Standard"
         }
    },
    "1011": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "30",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1011",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Energo-Pro Georgia",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1011.png",
              "MaxAmount": "2000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1011",
              "ServiceType": "Standard"
         }
    },
    "1012": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "31",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1012",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Didi Digomi gaz",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1012.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1012",
              "ServiceType": "Standard"
         }
    },
    "1013": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "66",
              "Mask": "^\\d{6}$",
              "Name": "customercode",
              "ServiceID": "1013",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "CGC - Rustavi Comunication Company (“საქ.-ოს ცენტ. კავშირგაბმულობის კორპორაცია” (რუსთ. ტელ.) )",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1013.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1013",
              "ServiceType": "Standard"
         }
    },
    "1014": {
         "Parameters": [
              {
                   "Description": "მომხმარებლის კოდი",
                   "ID": "32",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1014",
                   "Tooltip": "მომხმარებლის კოდი",
                   "Type": "Text"
              },
              {
                   "Description": "გადახდის ტიპი",
                   "ID": "365",
                   "Mask": "^\\d+$",
                   "Name": "additionalcode",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "218",
                                  "Name": "სააბონენტო გადასახადი",
                                  "ParameterID": "365",
                                  "Value": "1"
                             },
                             {
                                  "ID": "219",
                                  "Name": "ჩაჭრა-აღდგენის სერვისი",
                                  "ParameterID": "365",
                                  "Value": "2"
                             }
                        ]
                   },
                   "ServiceID": "1014",
                   "Tooltip": "გადახდის ტიპი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Rustavgaz",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1014.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1014",
              "ServiceType": "Standard"
         }
    },
    "1015": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "67",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1015",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "1",
              "Currency": null,
              "Description": "Informational service 09",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1015.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1015",
              "ServiceType": "Standard"
         }
    },
    "1016": {
         "Parameters": {
              "Description": "მომხმარებელი",
              "ID": "68",
              "Mask": "^\\d+$",
              "Name": "customer",
              "ServiceID": "1016",
              "Tooltip": "მომხმარებელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "LAGI",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1016.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1016",
              "ServiceType": "Standard"
         }
    },
    "1017": {
         "Parameters": {
              "Description": "მობილურის ნომერი",
              "ID": "9",
              "Mask": "^\\d{9}$",
              "Name": "mobilenumber",
              "ServiceID": "1017",
              "Tooltip": "მობილურის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Geocell",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1017.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.01",
              "Rounding": "1",
              "ServiceID": "1017",
              "ServiceType": "Standard"
         }
    },
    "1018": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "69",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1018",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Global 1",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1018.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1018",
              "ServiceType": "Standard"
         }
    },
    "1019": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "309",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1019",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ბათუმის პარკინგი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1019.png",
              "MaxAmount": "81",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1019",
              "ServiceType": "Standard"
         }
    },
    "1020": {
         "Parameters": {
              "Description": "მობილურის ნომერი",
              "ID": "10",
              "Mask": "^(995|\\+995|)\\d{9}$",
              "Name": "mobilenumber",
              "ServiceID": "1020",
              "Tooltip": "(5XXXXXXXX) მობილურის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Beeline",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1020.png",
              "MaxAmount": "1900",
              "MinAmount": "1",
              "MinCommission": "0.01",
              "Rounding": "0.01",
              "ServiceID": "1020",
              "ServiceType": "Standard"
         }
    },
    "1021": {
         "Parameters": [
              {
                   "Description": "მომხმარებელი",
                   "ID": "70",
                   "Mask": "^(\\d{6,7})$",
                   "Name": "customercode",
                   "ServiceID": "1021",
                   "Tooltip": "მომხმარებელი",
                   "Type": "Text"
              },
              {
                   "Description": "ტიპი",
                   "ID": "464",
                   "Mask": "^\\d+$",
                   "Name": "pluginname",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "244",
                                  "Name": "ტელეფონით",
                                  "ParameterID": "464",
                                  "Value": "67"
                             },
                             {
                                  "ID": "245",
                                  "Name": "კოდით",
                                  "ParameterID": "464",
                                  "Value": "238"
                             }
                        ]
                   },
                   "ServiceID": "1021",
                   "Tooltip": "ტიპი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Super TV",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1021.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1021",
              "ServiceType": "Standard"
         }
    },
    "1022": {
         "Parameters": [
              {
                   "Description": "მომხმარებლის კოდი",
                   "ID": "72",
                   "Mask": "^\\d+$",
                   "Name": "customercode",
                   "ServiceID": "1022",
                   "Tooltip": "მომხმარებლის კოდი",
                   "Type": "Text"
              },
              {
                   "Description": "Service",
                   "ID": "73",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": {
                             "ID": "143",
                             "Name": "DSL",
                             "ParameterID": "73",
                             "Value": "DSL"
                        }
                   },
                   "ServiceID": "1022",
                   "Tooltip": "Service",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "1",
              "Currency": null,
              "Description": "Maxtelcom",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1022.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1022",
              "ServiceType": "Standard"
         }
    },
    "1023": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "33",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1023",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Kutaisigaz",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1023.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1023",
              "ServiceType": "Standard"
         }
    },
    "1024": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "301",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1024",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "MrMaster",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1024.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1024",
              "ServiceType": "Standard"
         }
    },
    "1025": {
         "Parameters": [
              {
                   "Description": "მომხმარებლის კოდი",
                   "ID": "34",
                   "Mask": "^\\d+$",
                   "Name": "customercode",
                   "ServiceID": "1025",
                   "Tooltip": "მომხმარებლის კოდი",
                   "Type": "Text"
              },
              {
                   "Description": "1",
                   "ID": "248",
                   "Mask": "[\\s\\S]*",
                   "Name": "customerhidden",
                   "ServiceID": "1025",
                   "Tooltip": "1",
                   "Type": "HiddenEmptyField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Kakheti Energy Company",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1025.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1025",
              "ServiceType": "Standard"
         }
    },
    "1026": {
         "Parameters": [
              {
                   "Description": "მომხმარებლის კოდი",
                   "ID": "74",
                   "Mask": "^\\d+$",
                   "Name": "customercode",
                   "ServiceID": "1026",
                   "Tooltip": "მომხმარებლის კოდი",
                   "Type": "Text"
              },
              {
                   "Description": "Service",
                   "ID": "75",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "144",
                                  "Name": "VOIP-ტელეფონი",
                                  "ParameterID": "75",
                                  "Value": "VOIP"
                             },
                             {
                                  "ID": "145",
                                  "Name": "სხვა მომსახურება",
                                  "ParameterID": "75",
                                  "Value": "sxva momsaxureba"
                             }
                        ]
                   },
                   "ServiceID": "1026",
                   "Tooltip": "Service",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Geonet",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1026.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1026",
              "ServiceType": "Standard"
         }
    },
    "1027": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "76",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1027",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "GTC hi-line",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1027.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1027",
              "ServiceType": "Standard"
         }
    },
    "1028": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "43",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1028",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Akhmeta TV",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1028.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1028",
              "ServiceType": "Standard"
         }
    },
    "1029": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "310",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1029",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "პრობაციის ეროვნული სააგენტო",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1029.png",
              "MaxAmount": "1499",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1029",
              "ServiceType": "Standard"
         }
    },
    "1030": {
         "Parameters": {
              "Description": "ინვოისი",
              "ID": "343",
              "Mask": "^\\d+$",
              "Name": "invoice",
              "ServiceID": "1030",
              "Tooltip": "ინვოისი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ProServ.ge ჰოსტინგი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Hosting & Domain Registration",
              "GroupID": "11",
              "ImgURL": "/img/services/regular/1030.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1030",
              "ServiceType": "Standard"
         }
    },
    "1031": {
         "Parameters": {
              "Description": "ანგარიშის ნომერი",
              "ID": "344",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1031",
              "Tooltip": "ანგარიშის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ვესტბილდ (place.ge)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Digital Content",
              "GroupID": "9",
              "ImgURL": "/img/services/regular/1031.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1031",
              "ServiceType": "Standard"
         }
    },
    "1032": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "345",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1032",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "თელავიგაზი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1032.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1032",
              "ServiceType": "Standard"
         }
    },
    "1033": {
         "Parameters": {
              "Description": "აბონენტის ნომერი",
              "ID": "346",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1033",
              "Tooltip": "აბონენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ჯეოინტერკომი (GOSIM)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Digital Content",
              "GroupID": "9",
              "ImgURL": "/img/services/regular/1033.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1033",
              "ServiceType": "Standard"
         }
    },
    "1034": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "347",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1034",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ზუგდიდის სკოლა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1034.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1034",
              "ServiceType": "Standard"
         }
    },
    "1035": {
         "Parameters": {
              "Description": "აბონენტის ნომერი",
              "ID": "348",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1035",
              "Tooltip": "აბონენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Gphone",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1035.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1035",
              "ServiceType": "Standard"
         }
    },
    "1036": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "349",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1036",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "MTS (სომხეთი)",
              "Details": "Armenia",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1036.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1036",
              "ServiceType": "Standard"
         }
    },
    "1038": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "351",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1038",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Velcom (Belarus)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1038.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1038",
              "ServiceType": "Standard"
         }
    },
    "1039": {
         "Parameters": {
              "Description": "სესხის ნომერი",
              "ID": "352",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1039",
              "Tooltip": "სესხის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "მინიკრედიტი სესხის დაფარვა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1039.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1039",
              "ServiceType": "Standard"
         }
    },
    "1040": {
         "Parameters": {
              "Description": "ანგარიშის ნომერი",
              "ID": "354",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1040",
              "Tooltip": "ანგარიშის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Linex",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1040.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1040",
              "ServiceType": "Standard"
         }
    },
    "1041": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "355",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1041",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "კავკასიის უნივერსიტეტი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1041.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1041",
              "ServiceType": "Standard"
         }
    },
    "1042": {
         "Parameters": [
              {
                   "Description": "ნომერი",
                   "ID": "356",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1042",
                   "Tooltip": "ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "გადახდის ტიპი",
                   "ID": "357",
                   "Mask": "[\\s\\S]*",
                   "Name": "product",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "213",
                                  "Name": "სწავლების (ბაკალავრიატი, მაგისტრატურა, და ა.შ) საფასური",
                                  "ParameterID": "357",
                                  "Value": "ucc-ibsu-debt"
                             },
                             {
                                  "ID": "214",
                                  "Name": "ტრენინგის გადასახადი",
                                  "ParameterID": "357",
                                  "Value": "ucc-ibsu-training-debt"
                             }
                        ]
                   },
                   "ServiceID": "1042",
                   "Tooltip": "გადახდის ტიპი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "შავი ზღვის საერთაშორისო უნივერსიტეტი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1042.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1042",
              "ServiceType": "Standard"
         }
    },
    "1043": {
         "Parameters": [
              {
                   "Description": "ელფოსტა",
                   "ID": "785",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1043",
                   "Tooltip": "ელფოსტა",
                   "Type": "Text"
              },
              {
                   "Description": "0",
                   "ID": "786",
                   "Mask": "[\\s\\S]*",
                   "Name": "fixedpricemark_select_list",
                   "ServiceID": "1043",
                   "Tooltip": "0",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "BetExpert.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1043.png",
              "MaxAmount": "100",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1043",
              "ServiceType": "Standard"
         }
    },
    "1044": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "360",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1044",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "BestEx",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1044.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1044",
              "ServiceType": "Standard"
         }
    },
    "1045": {
         "Parameters": [
              {
                   "Description": "სახელი და გვარი",
                   "ID": "361",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1045",
                   "Tooltip": "სახელი და გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "შემოწირ. მიზნობრიობია",
                   "ID": "362",
                   "Mask": "[\\s\\S]*",
                   "Name": "details",
                   "ServiceID": "1045",
                   "Tooltip": "შემოწირ. მიზნობრიობია",
                   "Type": "Text"
              },
              {
                   "Description": "თანხა",
                   "ID": "363",
                   "Mask": "[\\s\\S]*",
                   "Name": "amount",
                   "ServiceID": "1045",
                   "Tooltip": "თანხა",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "წმ.სპირიდონ ტრიმიფუნტელის საქველმოქმედო ფონდი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Charity",
              "GroupID": "16",
              "ImgURL": "/img/services/regular/1045.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1045",
              "ServiceType": "Standard"
         }
    },
    "1046": {
         "Parameters": [
              {
                   "Description": "MagtiFix ნომერი",
                   "ID": "11",
                   "Mask": "^\\d{9}$",
                   "Name": "magtifixnumber",
                   "ServiceID": "1046",
                   "Tooltip": "MagtiFix ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "6",
                   "ID": "295",
                   "Mask": "^\\d+$",
                   "Name": "externalresult",
                   "ServiceID": "1046",
                   "Tooltip": "6",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Magtifix",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1046.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.01",
              "Rounding": "0.01",
              "ServiceID": "1046",
              "ServiceType": "Standard"
         }
    },
    "1047": {
         "Parameters": [
              {
                   "Description": "მობილურის ნომერი",
                   "ID": "12",
                   "Mask": "^\\d{9}$",
                   "Name": "mobilenumber",
                   "ServiceID": "1047",
                   "Tooltip": "მობილურის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "14",
                   "ID": "292",
                   "Mask": "^\\d+$",
                   "Name": "externalresult",
                   "ServiceID": "1047",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Bani",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1047.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0.01",
              "Rounding": "0.01",
              "ServiceID": "1047",
              "ServiceType": "Standard"
         }
    },
    "1048": {
         "Parameters": {
              "Description": "მომხმარებლის სახელი",
              "ID": "189",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "1048",
              "Tooltip": "მომხმარებლის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "GOODLINE",
              "Details": "GOODLINE-ში ბალანსის შევსება",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1048.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1048",
              "ServiceType": "Standard"
         }
    },
    "1049": {
         "Parameters": {
              "Description": "მომხმარებლის ნომერი",
              "ID": "6",
              "Mask": "^\\d{12}|\\d+-\\d+$",
              "Name": "customercode",
              "ServiceID": "1049",
              "Tooltip": "XXXXXXXXX-XXX",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Socar Georgia Gaz",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1049.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1049",
              "ServiceType": "Standard"
         }
    },
    "1050": {
         "Parameters": [
              {
                   "Description": "მომხმარებლის კოდი",
                   "ID": "112",
                   "Mask": "^\\d+$",
                   "Name": "customercode",
                   "ServiceID": "1050",
                   "Tooltip": "მომხმარებლის კოდი",
                   "Type": "Text"
              },
              {
                   "Description": "Station Code",
                   "ID": "113",
                   "Mask": "^\\d+$",
                   "Name": "stationcode",
                   "ServiceID": "1050",
                   "Tooltip": "Station Code",
                   "Type": "Text"
              },
              {
                   "Description": "Service",
                   "ID": "114",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "ServiceID": "1050",
                   "Tooltip": "Service",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Railway",
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1050.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1050",
              "ServiceType": "Standard"
         }
    },
    "1051": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "96",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1051",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Top-up OSMP dealers",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1051.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1051",
              "ServiceType": "Standard"
         }
    },
    "1052": {
         "Parameters": [
              {
                   "Description": "მანქანის ნომერი",
                   "ID": "115",
                   "Mask": "^((\\w{3}[0-9]{3})|(\\w{2}[0-9]{3}\\w{2})|(\\w{1,10}))$",
                   "Name": "customercode",
                   "ServiceID": "1052",
                   "Tooltip": "მანქანის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "სერვისი",
                   "ID": "116",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "172",
                                  "Name": "1 კვირიანი",
                                  "ParameterID": "116",
                                  "Value": "4"
                             },
                             {
                                  "ID": "173",
                                  "Name": "6 თვიანი",
                                  "ParameterID": "116",
                                  "Value": "25"
                             },
                             {
                                  "ID": "174",
                                  "Name": "12 თვიანი",
                                  "ParameterID": "116",
                                  "Value": "50"
                             }
                        ]
                   },
                   "ServiceID": "1052",
                   "Tooltip": "Service",
                   "Type": "List"
              },
              {
                   "Description": "ნომრის ტიპი",
                   "ID": "427",
                   "Mask": "^\\d+$",
                   "Name": "invoice",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "225",
                                  "Name": "XX000XX ფორმატში ან არასტანდარტული",
                                  "ParameterID": "427",
                                  "Value": "2"
                             },
                             {
                                  "ID": "224",
                                  "Name": "XXX000 ფორმატში",
                                  "ParameterID": "427",
                                  "Value": "1"
                             }
                        ]
                   },
                   "ServiceID": "1052",
                   "Tooltip": "ნომრის ტიპი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "CT-Park",
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1052.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1052",
              "ServiceType": "Standard"
         }
    },
    "1053": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "37",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1053",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "United Water",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1053.png",
              "MaxAmount": "2000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1053",
              "ServiceType": "Standard"
         }
    },
    "1054": {
         "Parameters": {
              "Description": "მობილურის ნომერი",
              "ID": "302",
              "Mask": "^\\d{9,12}$",
              "Name": "accountnumber",
              "ServiceID": "1054",
              "Tooltip": "მობილურის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Chinashop.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1054.png",
              "MaxAmount": "1500",
              "MinAmount": "0.1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1054",
              "ServiceType": "Standard"
         }
    },
    "1055": {
         "Parameters": {
              "Description": "ანგარიშის ნომერი",
              "ID": "364",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1055",
              "Tooltip": "ანგარიშის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "SMS-დღიური",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1055.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1055",
              "ServiceType": "Standard"
         }
    },
    "1056": {
         "Parameters": [
              {
                   "Description": "ანგარიში",
                   "ID": "366",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1056",
                   "Tooltip": "ანგარიში",
                   "Type": "Text"
              },
              {
                   "Description": null,
                   "ID": "713",
                   "Mask": "[\\s\\S]*",
                   "Name": "additionalcode",
                   "ServiceID": "1056",
                   "Tooltip": null,
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "2.5",
              "Currency": null,
              "Description": "Crystal",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1056.png",
              "MaxAmount": "300",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1056",
              "ServiceType": "Standard"
         }
    },
    "1057": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "38",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1057",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "KaspiGaz",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1057.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1057",
              "ServiceType": "Standard"
         }
    },
    "1058": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "39",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1058",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Mtkvari-M",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1058.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1058",
              "ServiceType": "Standard"
         }
    },
    "1059": {
         "Parameters": {
              "Description": "ქვითრის ნომერი ან პირადი ნომერი",
              "ID": "77",
              "Mask": "[\\s\\S]*",
              "Name": "order",
              "ServiceID": "1059",
              "Tooltip": "ქვითრის ნომერი ან პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Police fine",
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1059.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1059",
              "ServiceType": "Standard"
         }
    },
    "1060": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "40",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1060",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "EnergoKavshiri",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1060.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1060",
              "ServiceType": "Standard"
         }
    },
    "1061": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "F83519A18EB246B693B64BE789514CC8",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1062": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "41",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1062",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Varketili Air",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1062.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1062",
              "ServiceType": "Standard"
         }
    },
    "1063": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "97",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1063",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Top-up NOVA dealers",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1063.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1063",
              "ServiceType": "Standard"
         }
    },
    "1064": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "A4E79E53E12F453BA2DCA9053692876D",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1065": {
         "Parameters": [
              {
                   "Description": "12",
                   "ID": "297",
                   "Mask": "^\\d+$",
                   "Name": "externalresult",
                   "ServiceID": "1065",
                   "Tooltip": "12",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "მოდემის ნომერი",
                   "ID": "296",
                   "Mask": "[\\s\\S]*",
                   "Name": "mobilenumber",
                   "ServiceID": "1065",
                   "Tooltip": "მოდემის ნომერი",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "EVDO",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1065.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0.01",
              "Rounding": "0.01",
              "ServiceID": "1065",
              "ServiceType": "Standard"
         }
    },
    "1068": {
         "Parameters": [
              {
                   "Description": "PIN",
                   "ID": "368",
                   "Mask": "^\\d+$",
                   "Name": "accountnumber",
                   "ServiceID": "1068",
                   "Tooltip": "PIN",
                   "Type": "Text"
              },
              {
                   "Description": "პრომოკოდი",
                   "ID": "522",
                   "Mask": "[\\s\\S]*",
                   "Name": "code",
                   "ServiceID": "1068",
                   "Tooltip": "პრომოკოდი, თუ გაქვთ",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Iveriabet",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/1068.png",
              "MaxAmount": "1200",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1068",
              "ServiceType": "Standard"
         }
    },
    "1069": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "374",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1069",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Beeline (Ukraine)",
              "Details": "Ukraine",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1069.png",
              "MaxAmount": "200",
              "MinAmount": "0.01",
              "MinCommission": "0.02",
              "Rounding": "0.01",
              "ServiceID": "1069",
              "ServiceType": "Standard"
         }
    },
    "1070": {
         "Parameters": {
              "Description": "Wallet",
              "ID": "98",
              "Mask": "^[Zz][0-9]{12}$",
              "Name": "wallet",
              "ServiceID": "1070",
              "Tooltip": "ZXXXXXXXXXXXX ფორმატში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "WebMoney",
              "Details": "WMZ: ZXXXXXXXXXXXX",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1070.png",
              "MaxAmount": "1000",
              "MinAmount": "1.76",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1070",
              "ServiceType": "Standard"
         }
    },
    "1071": {
         "Parameters": {
              "Description": "ტელეფონის ნომერი",
              "ID": "124",
              "Mask": "^\\d+$",
              "Name": "INV",
              "ServiceID": "1071",
              "Tooltip": "ტელეფონის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "MyPhone",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1071.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1071",
              "ServiceType": "Standard"
         }
    },
    "1072": {
         "Parameters": {
              "Description": "ოთახის ნომერი",
              "ID": "117",
              "Mask": "^\\d+$",
              "Name": "room",
              "ServiceID": "1072",
              "Tooltip": "ოთახის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "USA2GEORGIA",
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1072.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1072",
              "ServiceType": "Standard"
         }
    },
    "1073": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "332",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1073",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Kyevstar",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1073.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1073",
              "ServiceType": "Standard"
         }
    },
    "1074": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "375",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1074",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Beeline (Tajikistan)",
              "Details": "Tajikistan",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1074.png",
              "MaxAmount": "200",
              "MinAmount": "1",
              "MinCommission": "0.02",
              "Rounding": "0.01",
              "ServiceID": "1074",
              "ServiceType": "Standard"
         }
    },
    "1075": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "42",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1075",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Energo-Pro Georgia cleanin service",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1075.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1075",
              "ServiceType": "Standard"
         }
    },
    "1077": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "15",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1077",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "LTD  "Batumi Water",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1077.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1077",
              "ServiceType": "Standard"
         }
    },
    "1078": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "16",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1078",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "RWC - Rustavi Water",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1078.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1078",
              "ServiceType": "Standard"
         }
    },
    "1079": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "17",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1079",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "MWC - Mtskheta Water",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1079.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1079",
              "ServiceType": "Standard"
         }
    },
    "1080": {
         "Parameters": {
              "Description": "იდენთიფიკაცია",
              "ID": "303",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1080",
              "Tooltip": "იდენთიფიკაცია",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Youlook.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Hosting & Domain Registration",
              "GroupID": "11",
              "ImgURL": "/img/services/regular/1080.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1080",
              "ServiceType": "Standard"
         }
    },
    "1081": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "376",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1081",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Beeline (Kazakhstan)",
              "Details": "Kazakhstan",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1081.png",
              "MaxAmount": "200",
              "MinAmount": "1",
              "MinCommission": "0.02",
              "Rounding": "0.01",
              "ServiceID": "1081",
              "ServiceType": "Standard"
         }
    },
    "1082": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "377",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1082",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Beeline (Armenia)",
              "Details": "Armenia",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1082.png",
              "MaxAmount": "200",
              "MinAmount": "1",
              "MinCommission": "0.02",
              "Rounding": "0.01",
              "ServiceID": "1082",
              "ServiceType": "Standard"
         }
    },
    "1084": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "196",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "1084",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Myvideo.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Digital Content",
              "GroupID": "9",
              "ImgURL": "/img/services/regular/1084.png",
              "MaxAmount": "1000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1084",
              "ServiceType": "Standard"
         }
    },
    "1085": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "45",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1085",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Service-net 8-69",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1085.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1085",
              "ServiceType": "Standard"
         }
    },
    "1086": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "46",
              "Mask": "^\\d{6}$",
              "Name": "customercode",
              "ServiceID": "1086",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "1",
              "Currency": null,
              "Description": "Maximal",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1086.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1086",
              "ServiceType": "Standard"
         }
    },
    "1087": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "99",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1087",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Top-up TBC PAY dealers",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1087.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1087",
              "ServiceType": "Standard"
         }
    },
    "1088": {
         "Parameters": {
              "Description": "Invoice ID",
              "ID": "78",
              "Mask": "^\\d+$",
              "Name": "invoice",
              "ServiceID": "1088",
              "Tooltip": "Invoice ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Property Management Agency",
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1088.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1088",
              "ServiceType": "Standard"
         }
    },
    "1089": {
         "Parameters": [
              {
                   "Description": "ანგარიში",
                   "ID": "672",
                   "Mask": "[\\s\\S]*",
                   "Name": "account",
                   "ServiceID": "1089",
                   "Tooltip": "ანგარიში",
                   "Type": "Text"
              },
              {
                   "Description": "სრული სახელი",
                   "ID": "674",
                   "Mask": "[\\s\\S]*",
                   "Name": "fullname",
                   "ServiceID": "1089",
                   "Tooltip": "სახელი გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "აღწერა",
                   "ID": "675",
                   "Mask": "[\\s\\S]*",
                   "Name": "description",
                   "ServiceID": "1089",
                   "Tooltip": "აღწერა",
                   "Type": "Text"
              },
              {
                   "Description": null,
                   "ID": "673",
                   "Mask": "[\\s\\S]*",
                   "Name": "onetimesend",
                   "ServiceID": "1089",
                   "Tooltip": null,
                   "Type": "HiddenEmptyField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "პროკრედიტ ბანკი",
              "Details": "თანხის გადარიცხვა შესაძლებელია მხოლოდ ფიზიკური პირისთვის. </br> არასამუშაო საათებში გადარიცხული თანხა აისახება მომდევნო საბანკო სამუშაო დღეს.",
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1089.png",
              "MaxAmount": "20001",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1089",
              "ServiceType": "Standard"
         }
    },
    "1090": {
         "Parameters": {
              "Description": "მომხმარებლის სახელი",
              "ID": "304",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1090",
              "Tooltip": "მომხმარებლის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Dictionary.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1090.png",
              "MaxAmount": "1000",
              "MinAmount": "3",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1090",
              "ServiceType": "Standard"
         }
    },
    "1091": {
         "Parameters": {
              "Description": "Unique Code",
              "ID": "79",
              "Mask": "[\\s\\S]*",
              "Name": "uniquecode",
              "ServiceID": "1091",
              "Tooltip": "Unique Code",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Tbilisi Kindergarten Tax",
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1091.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1091",
              "ServiceType": "Standard"
         }
    },
    "1092": {
         "Parameters": {
              "Description": "საფულის ნომერი",
              "ID": "318",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1092",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "EasyPay",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1092.png",
              "MaxAmount": "250",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1092",
              "ServiceType": "Standard"
         }
    },
    "1093": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "378",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1093",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Beeline (Kirgistan)",
              "Details": "Kyrgyzstan",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1093.png",
              "MaxAmount": "200",
              "MinAmount": "1",
              "MinCommission": "0.02",
              "Rounding": "0.01",
              "ServiceID": "1093",
              "ServiceType": "Standard"
         }
    },
    "1094": {
         "Parameters": {
              "Description": "იდენტიფიკატორი VO995",
              "ID": "118",
              "Mask": "^(.{9,14})$",
              "Name": "customercode",
              "ServiceID": "1094",
              "Tooltip": "მომხმარებლის კოდი VO995",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "vovovo.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1094.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1094",
              "ServiceType": "Standard"
         }
    },
    "1095": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "333",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1095",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Indigo Tcell",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1095.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1095",
              "ServiceType": "Standard"
         }
    },
    "1096": {
         "Parameters": [
              {
                   "Description": "მომხმარებლის კოდი",
                   "ID": "80",
                   "Mask": "^\\d+$",
                   "Name": "customercode",
                   "ServiceID": "1096",
                   "Tooltip": "მომხმარებლის კოდი",
                   "Type": "Text"
              },
              {
                   "Description": "Service",
                   "ID": "81",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "146",
                                  "Name": "1 დღიანი",
                                  "ParameterID": "81",
                                  "Value": "1d"
                             },
                             {
                                  "ID": "147",
                                  "Name": "7 დღიანი",
                                  "ParameterID": "81",
                                  "Value": "7d"
                             },
                             {
                                  "ID": "148",
                                  "Name": "30 დღიანი",
                                  "ParameterID": "81",
                                  "Value": "30d"
                             },
                             {
                                  "ID": "149",
                                  "Name": "182 დღიანი",
                                  "ParameterID": "81",
                                  "Value": "182d"
                             },
                             {
                                  "ID": "150",
                                  "Name": "365 დღიანი",
                                  "ParameterID": "81",
                                  "Value": "365d"
                             },
                             {
                                  "ID": "151",
                                  "Name": "Taxi 30 დღიანი",
                                  "ParameterID": "81",
                                  "Value": "taxi"
                             },
                             {
                                  "ID": "152",
                                  "Name": "სპეც ტექნიკა",
                                  "ParameterID": "81",
                                  "Value": "specTech"
                             },
                             {
                                  "ID": "153",
                                  "Name": "სპეც ტექნიკა 1 დღიან პარკირება",
                                  "ParameterID": "81",
                                  "Value": "specTech2"
                             }
                        ]
                   },
                   "ServiceID": "1096",
                   "Tooltip": "Service",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Infrasturcture Projects Agency",
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1096.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1096",
              "ServiceType": "Standard"
         }
    },
    "1097": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "47",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1097",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Didgori 2",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1097.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1097",
              "ServiceType": "Standard"
         }
    },
    "1098": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "48",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1098",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Studia TV",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1098.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1098",
              "ServiceType": "Standard"
         }
    },
    "1099": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "49",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1099",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "GNN",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1099.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1099",
              "ServiceType": "Standard"
         }
    },
    "1100": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "311",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1100",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "GameDealer.ru",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1100.png",
              "MaxAmount": "250",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1100",
              "ServiceType": "Standard"
         }
    },
    "1101": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "89",
              "Mask": "^[A-Z]\\d+$",
              "Name": "customercode",
              "ServiceID": "1101",
              "Tooltip": "მომხმარებლის კოდი ფორმატში: Jxxx...",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "jok.ge",
              "Details": "Jxxx...",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1101.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1101",
              "ServiceType": "Standard"
         }
    },
    "1102": {
         "Parameters": {
              "Description": "ანგარიში (ID)",
              "ID": "300",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1102",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "HotDeals",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1102.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1102",
              "ServiceType": "Standard"
         }
    },
    "1103": {
         "Parameters": {
              "Description": "Invoice ID",
              "ID": "82",
              "Mask": "[\\s\\S]*",
              "Name": "invoice",
              "ServiceID": "1103",
              "Tooltip": "Invoice ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Architecture",
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1103.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1103",
              "ServiceType": "Standard"
         }
    },
    "1104": {
         "Parameters": {
              "Description": "მომხმარებლის სახელი",
              "ID": "319",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1104",
              "Tooltip": "მომხმარებლის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Livegame.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1104.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1104",
              "ServiceType": "Standard"
         }
    },
    "1105": {
         "Parameters": {
              "Description": "Invoice ID",
              "ID": "83",
              "Mask": "^\\d+$",
              "Name": "invoice",
              "ServiceID": "1105",
              "Tooltip": "Invoice ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Hermes",
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1105.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1105",
              "ServiceType": "Standard"
         }
    },
    "1106": {
         "Parameters": [
              {
                   "Description": "ტელეფონი (995xxxxxx)",
                   "ID": "320",
                   "Mask": "^\\d+$",
                   "Name": "customercode",
                   "ServiceID": "1106",
                   "Tooltip": "ტელეფონი",
                   "Type": "Text"
              },
              {
                   "Description": "ვალუტა",
                   "ID": "582",
                   "Mask": "^\\d+$",
                   "Name": "pluginname",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "277",
                                  "Name": "RUB",
                                  "ParameterID": "582",
                                  "Value": "129"
                             },
                             {
                                  "ID": "278",
                                  "Name": "USD",
                                  "ParameterID": "582",
                                  "Value": "417"
                             },
                             {
                                  "ID": "279",
                                  "Name": "EUR",
                                  "ParameterID": "582",
                                  "Value": "418"
                             }
                        ]
                   },
                   "ServiceID": "1106",
                   "Tooltip": "ვალუტა",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Qiwi",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1106.png",
              "MaxAmount": "527.8",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1106",
              "ServiceType": "Standard"
         }
    },
    "1107": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "379",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1107",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Beeline (Russia)",
              "Details": "Russia",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1107.png",
              "MaxAmount": "200",
              "MinAmount": "1",
              "MinCommission": "0.02",
              "Rounding": "0.01",
              "ServiceID": "1107",
              "ServiceType": "Standard"
         }
    },
    "1108": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "50",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1108",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Airnet",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1108.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1108",
              "ServiceType": "Standard"
         }
    },
    "1109": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "312",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1109",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ჩინეთის ვიზის საფასური",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1109.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1109",
              "ServiceType": "Standard"
         }
    },
    "1110": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "380",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1110",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "MTS (Ukraine)",
              "Details": "Ukraine",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1110.png",
              "MaxAmount": "200",
              "MinAmount": "1",
              "MinCommission": "0.02",
              "Rounding": "0.01",
              "ServiceID": "1110",
              "ServiceType": "Standard"
         }
    },
    "1111": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "381",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1111",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "MTS (Belarus)",
              "Details": "Belarus",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1111.png",
              "MaxAmount": "200",
              "MinAmount": "1",
              "MinCommission": "0.02",
              "Rounding": "0.01",
              "ServiceID": "1111",
              "ServiceType": "Standard"
         }
    },
    "1112": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "121",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1112",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Europe-bet",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/1112.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1112",
              "ServiceType": "Standard"
         }
    },
    "1113": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "325",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1113",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Saima",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1113.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1113",
              "ServiceType": "Standard"
         }
    },
    "1114": {
         "Parameters": {
              "Description": "ID",
              "ID": "382",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1114",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Nardionline.net",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/1114.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1114",
              "ServiceType": "Standard"
         }
    },
    "1115": {
         "Parameters": {
              "Description": "#",
              "ID": "383",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1115",
              "Tooltip": "#",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ქარელის დასუფთავება",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1115.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1115",
              "ServiceType": "Standard"
         }
    },
    "1116": {
         "Parameters": {
              "Description": "#",
              "ID": "384",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1116",
              "Tooltip": "#",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Inex Group",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1116.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1116",
              "ServiceType": "Standard"
         }
    },
    "1118": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "386",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1118",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "თანხა",
                   "ID": "387",
                   "Mask": "[\\s\\S]*",
                   "Name": "amount",
                   "ServiceID": "1118",
                   "Tooltip": "თანხა",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "გამოცდების ეროვნული ცენტრი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1118.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1118",
              "ServiceType": "Standard"
         }
    },
    "1119": {
         "Parameters": [
              {
                   "Description": "სახაზინო კოდი",
                   "ID": "388",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1119",
                   "Tooltip": "სახაზინო კოდი",
                   "Type": "Text"
              },
              {
                   "Description": "პირადი ნომერი",
                   "ID": "389",
                   "Mask": "[\\s\\S]*",
                   "Name": "personalid",
                   "ServiceID": "1119",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "სახელი, გვარი",
                   "ID": "390",
                   "Mask": "[\\s\\S]*",
                   "Name": "customer",
                   "ServiceID": "1119",
                   "Tooltip": "სახელი, გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "გადამხდელის პირადი ნომერი",
                   "ID": "391",
                   "Mask": "[\\s\\S]*",
                   "Name": "account",
                   "ServiceID": "1119",
                   "Tooltip": "გადამხდელის პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "გადამხდელის სახელი",
                   "ID": "392",
                   "Mask": "[\\s\\S]*",
                   "Name": "indicator",
                   "ServiceID": "1119",
                   "Tooltip": "გადამხდელის გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "გადამხდელის გვარი",
                   "ID": "393",
                   "Mask": "[\\s\\S]*",
                   "Name": "username",
                   "ServiceID": "1119",
                   "Tooltip": "გადამხდელის გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "თანხა",
                   "ID": "394",
                   "Mask": "[\\s\\S]*",
                   "Name": "amount",
                   "ServiceID": "1119",
                   "Tooltip": "თანხა",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "საბიუჯეტო მოსაკრებელი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1119.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1119",
              "ServiceType": "Standard"
         }
    },
    "1121": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "20",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1121",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Borjomi Cleaning Service",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1121.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1121",
              "ServiceType": "Standard"
         }
    },
    "1122": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "7E899F598FC042FD90E2984DE8D5A43E",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1123": {
         "Parameters": [
              {
                   "Description": "საფულის კოდი",
                   "ID": "100",
                   "Mask": "^\\d+$",
                   "Name": "wallet",
                   "ServiceID": "1123",
                   "Tooltip": "საფულის კოდი",
                   "Type": "Text"
              },
              {
                   "ID": "101",
                   "Mask": "^\\d+$",
                   "Name": "tocurrency",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "154",
                                  "Name": "RUB",
                                  "ParameterID": "101",
                                  "Value": "643"
                             },
                             {
                                  "ID": "155",
                                  "Name": "USD",
                                  "ParameterID": "101",
                                  "Value": "840"
                             }
                        ]
                   },
                   "ServiceID": "1123",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "W1",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1123.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1123",
              "ServiceType": "Standard"
         }
    },
    "1124": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "119",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1124",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Security Police",
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1124.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1124",
              "ServiceType": "Standard"
         }
    },
    "1125": {
         "Parameters": {
              "Description": "საფულის კოდი",
              "ID": "102",
              "Mask": "^\\d+$",
              "Name": "wallet",
              "ServiceID": "1125",
              "Tooltip": "საფულის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "3",
              "Currency": null,
              "Description": "Yandex Money",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1125.png",
              "MaxAmount": "291.2",
              "MinAmount": "1",
              "MinCommission": "0.01",
              "Rounding": "0.01",
              "ServiceID": "1125",
              "ServiceType": "Standard"
         }
    },
    "1126": {
         "Parameters": {
              "ID": "135",
              "Mask": "^\\d{11,26}$",
              "Name": "wallet",
              "ServiceID": "1126",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Nova Yandex Money",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1125.png",
              "MaxAmount": "291.2",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1126",
              "ServiceType": "Standard"
         }
    },
    "1127": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "395",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1127",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Salesland.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1127.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1127",
              "ServiceType": "Standard"
         }
    },
    "1128": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "396",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1128",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "MTS (Russia)",
              "Details": "Russia",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1128.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1128",
              "ServiceType": "Standard"
         }
    },
    "1129": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "397",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1129",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Intertelecom (Ukraine)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1129.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1129",
              "ServiceType": "Standard"
         }
    },
    "1130": {
         "Parameters": [
              {
                   "Description": "ანგარიში",
                   "ID": "679",
                   "Mask": "[\\s\\S]*",
                   "Name": "account",
                   "ServiceID": "1130",
                   "Tooltip": "ანგარიში",
                   "Type": "Text"
              },
              {
                   "Description": "სრული სახელი",
                   "ID": "681",
                   "Mask": "[\\s\\S]*",
                   "Name": "fullname",
                   "ServiceID": "1130",
                   "Tooltip": "სახელი გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "აღწერა",
                   "ID": "682",
                   "Mask": "[\\s\\S]*",
                   "Name": "description",
                   "ServiceID": "1130",
                   "Tooltip": "აღწერა",
                   "Type": "Text"
              },
              {
                   "Description": null,
                   "ID": "680",
                   "Mask": "[\\s\\S]*",
                   "Name": "onetimesend",
                   "ServiceID": "1130",
                   "Tooltip": null,
                   "Type": "HiddenEmptyField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Basis Bank ბაზის ბანკი",
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1130.png",
              "MaxAmount": "1200",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1130",
              "ServiceType": "Standard"
         }
    },
    "1131": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "305",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1131",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Teach.ge",
              "Details": "თანხის ჩარიცხვის შემდეგ მეილზე (info@teach.ge) მოგვწერეთ, თქვენი უნიკალურიკოდი (id), e-mail და სასურველი კურსი (ენა+კურსი). <br>\r\nამის შემდეგ ჩვენ გაგიაქტიურებთ შეძენილ კურსს. ცხელი ხაზი 599 075577",
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1131.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1131",
              "ServiceType": "Standard"
         }
    },
    "1132": {
         "Parameters": {
              "Description": "მობილურის ნომერი",
              "ID": "13",
              "Mask": "^\\d+$",
              "Name": "mobilenumber",
              "ServiceID": "1132",
              "Tooltip": "მობილურის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "S1",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1132.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "1",
              "ServiceID": "1132",
              "ServiceType": "Standard"
         }
    },
    "1133": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "51",
              "Mask": "^\\d+$",
              "Name": "customercodescipher",
              "ServiceID": "1133",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Silknet Account Number",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1133.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1133",
              "ServiceType": "Standard"
         }
    },
    "1134": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "313",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1134",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "boom.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1134.png",
              "MaxAmount": "1500",
              "MinAmount": "10",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1134",
              "ServiceType": "Standard"
         }
    },
    "1135": {
         "Parameters": [
              {
                   "Description": "მომხმარებლის კოდი",
                   "ID": "52",
                   "Mask": "^\\d+$",
                   "Name": "customercode",
                   "ServiceID": "1135",
                   "Tooltip": "მომხმარებლის კოდი",
                   "Type": "Text"
              },
              {
                   "Description": "სერვისი",
                   "ID": "53",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "1",
                                  "Name": "ერთჯერადი გადასახადი",
                                  "ParameterID": "53",
                                  "Value": "3"
                             },
                             {
                                  "ID": "2",
                                  "Name": "ინსტალაცია",
                                  "ParameterID": "53",
                                  "Value": "2"
                             },
                             {
                                  "ID": "3",
                                  "Name": "სააბონენტო გადასახადი",
                                  "ParameterID": "53",
                                  "Value": "4"
                             }
                        ]
                   },
                   "ServiceID": "1135",
                   "Tooltip": "სერვისი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Magti Sat",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1135.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "1",
              "ServiceID": "1135",
              "ServiceType": "Standard"
         }
    },
    "1136": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "314",
              "Mask": "^\\d{5}$",
              "Name": "customercode",
              "ServiceID": "1136",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "7 არხი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1136.png",
              "MaxAmount": "200",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1136",
              "ServiceType": "Standard"
         }
    },
    "1137": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "54",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1137",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Black Sea Sat",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1137.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1137",
              "ServiceType": "Standard"
         }
    },
    "1138": {
         "Parameters": {
              "Description": "აბონენტის ნომრით ან ხელშეკრულების ნომრით",
              "ID": "315",
              "Mask": "^[\\s\\S]{3,12}$",
              "Name": "customercode",
              "ServiceID": "1138",
              "Tooltip": "აბონენტის ნომრით ან ხელშეკრულების ნომრით",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Global TV",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1138.png",
              "MaxAmount": "1499",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1138",
              "ServiceType": "Standard"
         }
    },
    "1139": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "84",
              "Mask": "^\\d+$",
              "Name": "personalid",
              "ServiceID": "1139",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Akhaltsikhe University",
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1139.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1139",
              "ServiceType": "Standard"
         }
    },
    "1140": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "321",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1140",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "1.5",
              "Currency": null,
              "Description": "Ukash",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1140.png",
              "MaxAmount": "300",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1140",
              "ServiceType": "Standard"
         }
    },
    "1141": {
         "Parameters": {
              "Description": "#",
              "ID": "398",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1141",
              "Tooltip": "#",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "კახეთის გაზი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1141.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1141",
              "ServiceType": "Standard"
         }
    },
    "1143": {
         "Parameters": {
              "Description": "Indicator Value",
              "ID": "22",
              "Mask": "^\\d+$",
              "Name": "indicator",
              "ServiceID": "1143",
              "Tooltip": "Indicator Value",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "GWP - Tbilisi Water Company counter fee",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1143.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1143",
              "ServiceType": "Standard"
         }
    },
    "1144": {
         "Parameters": {
              "Description": "Indicator Value",
              "ID": "23",
              "Mask": "^\\d+$",
              "Name": "indicator",
              "ServiceID": "1144",
              "Tooltip": "Indicator Value",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "RWC - Rustavi Water Company couner fee",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1144.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1144",
              "ServiceType": "Standard"
         }
    },
    "1145": {
         "Parameters": {
              "Description": "Indicator Value",
              "ID": "24",
              "Mask": "^\\d+$",
              "Name": "indicator",
              "ServiceID": "1145",
              "Tooltip": "Indicator Value",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "MWC - Mckheta Water Company counter fee",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1145.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1145",
              "ServiceType": "Standard"
         }
    },
    "1146": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "15C3C02B2CB64CD7A638B3D07BD01ABE",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1147": {
         "Parameters": {
              "Description": "#",
              "ID": "399",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1147",
              "Tooltip": "#",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "აიტი სერვისი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1147.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1147",
              "ServiceType": "Standard"
         }
    },
    "1149": {
         "Parameters": {
              "Description": "#",
              "ID": "400",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1149",
              "Tooltip": "#",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ალია ჰოლდინგი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1149.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1149",
              "ServiceType": "Standard"
         }
    },
    "1150": {
         "Parameters": {
              "Description": "#",
              "ID": "401",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1150",
              "Tooltip": "#",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ექსპრეს ლაინ სერვისი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1150.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1150",
              "ServiceType": "Standard"
         }
    },
    "1151": {
         "Parameters": {
              "Description": "კლიენტის კოდი",
              "ID": "402",
              "Mask": "^.{3,5}$",
              "Name": "customercode",
              "ServiceID": "1151",
              "Tooltip": "კლიენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ლინონი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1151.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1151",
              "ServiceType": "Standard"
         }
    },
    "1152": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "403",
              "Mask": "^\\d{1,10}$",
              "Name": "customercode",
              "ServiceID": "1152",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ყამარი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1152.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1152",
              "ServiceType": "Standard"
         }
    },
    "1153": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "404",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1153",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ხაშურის მუნიციპალიტეტი (დასუფთავება)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1153.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1153",
              "ServiceType": "Standard"
         }
    },
    "1154": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "405",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1154",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "სახმელეთო ტრანსპორტის სააგენტო",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1154.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1154",
              "ServiceType": "Standard"
         }
    },
    "1155": {
         "Parameters": {
              "Description": "lasvegas-bet.com იდენტიფიკატორი",
              "ID": "91",
              "Mask": "^\\d{6,7}$",
              "Name": "account",
              "ServiceID": "1155",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Las Vegas",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/1155.png",
              "MaxAmount": "1500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1155",
              "ServiceType": "Standard"
         }
    },
    "1156": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "326",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1156",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Nexi",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1156.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1156",
              "ServiceType": "Standard"
         }
    },
    "1157": {
         "Parameters": {
              "Description": "ანგარიშის ნომერი",
              "ID": "92",
              "Mask": "^\\d{1,20}$",
              "Name": "customercode",
              "ServiceID": "1157",
              "Tooltip": "ანგარიშის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Adjarabet",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/1157.png",
              "MaxAmount": "1000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1157",
              "ServiceType": "Standard"
         }
    },
    "1158": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "327",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1158",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Fonex",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1158.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1158",
              "ServiceType": "Standard"
         }
    },
    "1159": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "406",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1159",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "განათლების ხარისხის განვითარების ეროვნული ცენტრი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1159.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1159",
              "ServiceType": "Standard"
         }
    },
    "1160": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "407",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1160",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "AMMC",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Health & Beauty",
              "GroupID": "14",
              "ImgURL": "/img/services/regular/1160.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "2",
              "Rounding": "0.01",
              "ServiceID": "1160",
              "ServiceType": "Standard"
         }
    },
    "1161": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "408",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1161",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ხელნაწერთა ეროვნული ცენტრი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1161.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1161",
              "ServiceType": "Standard"
         }
    },
    "1162": {
         "Parameters": {
              "Description": "PIN",
              "ID": "93",
              "Mask": "^\\d{1,20}$",
              "Name": "accountnumber",
              "ServiceID": "1162",
              "Tooltip": "PIN",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Lider-bet",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/1162.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1162",
              "ServiceType": "Standard"
         }
    },
    "1163": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "328",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1163",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "NEO Kazaxstan",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1163.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1163",
              "ServiceType": "Standard"
         }
    },
    "1164": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "409",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1164",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Hot Sale",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Digital Content",
              "GroupID": "9",
              "ImgURL": "/img/services/regular/1164.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1164",
              "ServiceType": "Standard"
         }
    },
    "1165": {
         "Parameters": {
              "Description": "აღწერა",
              "ID": "25",
              "Mask": ".{1,}",
              "Name": "description",
              "ServiceID": "1165",
              "Tooltip": "აღწერა",
              "Type": "OptionalTextField"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "თანხის განაღდება IntelExpress -ში",
              "Details": "<span style=\"color:yellow\">თანხის განაღდება INTEL EXPRESS-ის ფილიალებიდან</span><br> \r\nთანხის განაღდების დროს თან იქონიეთ პირადობის დამადასტურებელი მოწმობა<br>და ტრანზაქციის ნომერი, რომელიც ტრანზაქციის დასრულებისთანავე გამოჩნდება ეკრანზე<br> ტრანზაქციების ისტორიაში, გამოგეგზავნებათ ელფოსტაზე და ტელეფონზე.",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1165.png",
              "MaxAmount": "500",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1165",
              "ServiceType": "Standard"
         }
    },
    "1166": {
         "Parameters": [
              {
                   "Description": "ანგარიში",
                   "ID": "103",
                   "Mask": "^\\d+$",
                   "Name": "accountnumber",
                   "ServiceID": "1166",
                   "Tooltip": "Personal Account",
                   "Type": "Text"
              },
              {
                   "Description": "სერვისი",
                   "ID": "104",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "156",
                                  "Name": "პროცენტის გადახდა",
                                  "ParameterID": "104",
                                  "Value": "1"
                             },
                             {
                                  "ID": "157",
                                  "Name": "ამორტიზაციის გადახდა",
                                  "ParameterID": "104",
                                  "Value": "2"
                             },
                             {
                                  "ID": "158",
                                  "Name": "სესხის დახურვა",
                                  "ParameterID": "104",
                                  "Value": "3"
                             }
                        ]
                   },
                   "ServiceID": "1166",
                   "Tooltip": "Service",
                   "Type": "List"
              },
              {
                   "Description": "ტელეფონის ნომერი",
                   "ID": "105",
                   "Mask": "^\\d+$",
                   "Name": "phonenumber",
                   "ServiceID": "1166",
                   "Tooltip": "ტელეფონის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "პირადი ნომერი",
                   "ID": "372",
                   "Mask": "^\\d+$",
                   "Name": "personalid",
                   "ServiceID": "1166",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "0",
                   "ID": "816",
                   "Mask": "[\\s\\S]*",
                   "Name": "fixedpricemark_select_list",
                   "ServiceID": "1166",
                   "Tooltip": "0",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "RICO",
              "Details": "ზუსტად დაწერეთ კრედიტის თანხა, სხვა შემთხვევაში <span style=\"font-size: large;\">არ დამუშავდება</span>!",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1166.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1166",
              "ServiceType": "Standard"
         }
    },
    "1167": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "330",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1167",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Dalacom",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1167.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1167",
              "ServiceType": "Standard"
         }
    },
    "1168": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "85",
              "Mask": "^([0-9Z]{20})$",
              "Name": "customercode",
              "ServiceID": "1168",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "odnoklassniki.ru",
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1168.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1168",
              "ServiceType": "Standard"
         }
    },
    "1169": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "86",
              "Mask": "^[a-zA-Z0-9]{4,255}$",
              "Name": "customercode",
              "ServiceID": "1169",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Vkontakte.ru",
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1169.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1169",
              "ServiceType": "Standard"
         }
    },
    "1170": {
         "Parameters": {
              "Description": "Email",
              "ID": "87",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1170",
              "Tooltip": "Email",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Mamba.ru",
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1170.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1170",
              "ServiceType": "Standard"
         }
    },
    "1171": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "323",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1171",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Life (Ukraine)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1171.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1171",
              "ServiceType": "Standard"
         }
    },
    "1172": {
         "Parameters": {
              "Description": "საფულის კოდი",
              "ID": "106",
              "Mask": "^\\d+$",
              "Name": "wallet",
              "ServiceID": "1172",
              "Tooltip": "საფულის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Telemoney",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1172.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1172",
              "ServiceType": "Standard"
         }
    },
    "1173": {
         "Parameters": {
              "Description": "საფულის კოდი",
              "ID": "107",
              "Mask": "^\\d+$",
              "Name": "wallet",
              "ServiceID": "1173",
              "Tooltip": "საფულის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Moneta.ru",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1173.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1173",
              "ServiceType": "Standard"
         }
    },
    "1174": {
         "Parameters": {
              "Description": "საფულის კოდი",
              "ID": "108",
              "Mask": "^\\d+$",
              "Name": "wallet",
              "ServiceID": "1174",
              "Tooltip": "საფულის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Cash U",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1174.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1174",
              "ServiceType": "Standard"
         }
    },
    "1175": {
         "Parameters": {
              "Description": "საფულის კოდი",
              "ID": "109",
              "Mask": "^\\d+$",
              "Name": "wallet",
              "ServiceID": "1175",
              "Tooltip": "საფულის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "RBK Money",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1175.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1175",
              "ServiceType": "Standard"
         }
    },
    "1178": {
         "Parameters": {
              "Description": "მობილურის ნომერი",
              "ID": "14",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1178",
              "Tooltip": "მობილურის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "megafon",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1178.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1178",
              "ServiceType": "Standard"
         }
    },
    "1179": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "317",
              "Mask": "^\\d{6}$",
              "Name": "customercode",
              "ServiceID": "1179",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "სავაჭრო-სამრეწველო პალატა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1179.png",
              "MaxAmount": "1499",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1179",
              "ServiceType": "Standard"
         }
    },
    "1181": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "411",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1181",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Aris.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1181.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1181",
              "ServiceType": "Standard"
         }
    },
    "1182": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "412",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1182",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "National Geografic",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1182.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1182",
              "ServiceType": "Standard"
         }
    },
    "1183": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "55",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1183",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2.5",
              "Currency": null,
              "Description": "NTVplus",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1183.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1183",
              "ServiceType": "Standard"
         }
    },
    "1185": {
         "Parameters": {
              "Description": "საფულის კოდი",
              "ID": "110",
              "Mask": "^\\d+$",
              "Name": "wallet",
              "ServiceID": "1185",
              "Tooltip": "საფულის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "webmoney check",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1185.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1185",
              "ServiceType": "Standard"
         }
    },
    "1186": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "26",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1186",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Terjola Natural Air",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1186.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1186",
              "ServiceType": "Standard"
         }
    },
    "1187": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "27",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1187",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Samtredia Gaz",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1187.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1187",
              "ServiceType": "Standard"
         }
    },
    "1188": {
         "Parameters": {
              "Description": "სტიმის ანგარიში",
              "ID": "306",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1188",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "1",
              "Currency": null,
              "Description": "Steam",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1188.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.1",
              "Rounding": "0.01",
              "ServiceID": "1188",
              "ServiceType": "Standard"
         }
    },
    "1189": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "28",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1189",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Vani Gaz",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1189.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1189",
              "ServiceType": "Standard"
         }
    },
    "1190": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "88",
              "Mask": "^[a-zA-Z][a-zA-Z0-9\\.,\\-_]{5,31}$",
              "Name": "customercode",
              "ServiceID": "1190",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Skype",
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1190.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1190",
              "ServiceType": "Standard"
         }
    },
    "1191": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "324",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1191",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Sapatmobile",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1191.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1191",
              "ServiceType": "Standard"
         }
    },
    "1192": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "413",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1192",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Business Express",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1192.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1192",
              "ServiceType": "Standard"
         }
    },
    "1193": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "414",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1193",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "09 ტაქსი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1193.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1193",
              "ServiceType": "Standard"
         }
    },
    "1195": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "448",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1195",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "1",
              "Currency": null,
              "Description": "r2online",
              "Details": "http://r2online.webzen.com",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1195.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1195",
              "ServiceType": "Standard"
         }
    },
    "1196": {
         "Parameters": {
              "Description": "საფულის კოდი",
              "ID": "111",
              "Mask": "^\\d+$",
              "Name": "wallet",
              "ServiceID": "1196",
              "Tooltip": "საფულის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Mail.ru Money",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1196.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1196",
              "ServiceType": "Standard"
         }
    },
    "1197": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "5D412892513F4A88A174FA59C0985C98",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1198": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "A676F3018E1E464E9F669597EEC3DDC6",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1199": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "B35DEA53874F48E1913239465A8CA1C2",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1200": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "8F2C294F9AAD49F1B46A5BE64C075C55",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1201": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "1D64AA67876D4A71A4932BA0B993B85B",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1202": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "9E912D0323FA47DABC9CFCAFAA73BC31",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1203": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "E6E5082502734E089490302ED2CD62F5",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1204": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "DE409E14A161417697BC1C456D0FA823",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1205": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "139",
              "Mask": "^\\d+$",
              "Name": "accountnumber",
              "ServiceID": "1205",
              "Tooltip": "ანგარიშის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "DeltaNet",
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1205.png",
              "MaxAmount": "2000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1205",
              "ServiceType": "Standard"
         }
    },
    "1206": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "415",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1206",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "პრომეთე - სწავლის საფასური",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1206.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1206",
              "ServiceType": "Standard"
         }
    },
    "1207": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "416",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1207",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "პრომეთე - სახელშეკრულებო",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1207.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1207",
              "ServiceType": "Standard"
         }
    },
    "1208": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "417",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1208",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "პრომეთე - წრეობრივი სწავლის საფასური",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1208.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1208",
              "ServiceType": "Standard"
         }
    },
    "1209": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "418",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1209",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "პრომეთე - ჯარიმა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1209.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1209",
              "ServiceType": "Standard"
         }
    },
    "1210": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "419",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1210",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "პრომეთე - გახანგრძლივებული სწავლის საფასური",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1210.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1210",
              "ServiceType": "Standard"
         }
    },
    "1211": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "420",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1211",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ფოთისა და ხობის ეპარქიის განვითარების",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Charity",
              "GroupID": "16",
              "ImgURL": "/img/services/regular/1211.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1211",
              "ServiceType": "Standard"
         }
    },
    "1212": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "421",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1212",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "შპს \"უროლაბი\"",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1212.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1212",
              "ServiceType": "Standard"
         }
    },
    "1213": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "422",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1213",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ობიექტივი - ფონდი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Charity",
              "GroupID": "16",
              "ImgURL": "/img/services/regular/1213.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1213",
              "ServiceType": "Standard"
         }
    },
    "1214": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "423",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1214",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ქოზიფა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Charity",
              "GroupID": "16",
              "ImgURL": "/img/services/regular/1214.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1214",
              "ServiceType": "Standard"
         }
    },
    "1215": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "424",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1215",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Live24",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1215.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1215",
              "ServiceType": "Standard"
         }
    },
    "1216": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "425",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1216",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Promosale",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Health & Beauty",
              "GroupID": "14",
              "ImgURL": "/img/services/regular/1216.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1216",
              "ServiceType": "Standard"
         }
    },
    "1217": {
         "Parameters": {
              "Description": "იარაღის სარეგისტრაციო ნომერი",
              "ID": "426",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1217",
              "Tooltip": "იარაღის სარეგისტრაციო ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "იარაღის განბაჟება",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1217.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1217",
              "ServiceType": "Standard"
         }
    },
    "1219": {
         "Parameters": [
              {
                   "Description": "ქვითრის №",
                   "ID": "430",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1219",
                   "Tooltip": "ქვითრის №",
                   "Type": "Text"
              },
              {
                   "Description": "სახაზინო კოდი",
                   "ID": "431",
                   "Mask": "[\\s\\S]*",
                   "Name": "code",
                   "Parameters": {
                        "ParameterReference": {
                             "ID": "238",
                             "Name": "ჯარიმა უბილეთო მგზავრობისთვის",
                             "ParameterID": "431",
                             "Value": "300773255"
                        }
                   },
                   "ServiceID": "1219",
                   "Tooltip": "სახაზინო კოდი",
                   "Type": "List"
              },
              {
                   "Description": "დაჯარიმებულის პირადი №",
                   "ID": "433",
                   "Mask": "[\\s\\S]*",
                   "Name": "finepersonalid",
                   "ServiceID": "1219",
                   "Tooltip": "დაჯარიმებულის პირადი №",
                   "Type": "Text"
              },
              {
                   "Description": "დაჯარიმ. სახელი, გვარი",
                   "ID": "432",
                   "Mask": "[\\s\\S]*",
                   "Name": "finefullname",
                   "ServiceID": "1219",
                   "Tooltip": "დაჯარიმ. სახელი, გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "გადამხდელის პირადი №",
                   "ID": "434",
                   "Mask": "[\\s\\S]*",
                   "Name": "personalid",
                   "ServiceID": "1219",
                   "Tooltip": "გადამხდელის პირადი №",
                   "Type": "Text"
              },
              {
                   "Description": "გადამხდელის სახელი",
                   "ID": "435",
                   "Mask": "[\\s\\S]*",
                   "Name": "firstname",
                   "ServiceID": "1219",
                   "Tooltip": "გადამხდელის სახელი",
                   "Type": "Text"
              },
              {
                   "Description": "გადამხდელის გვარი",
                   "ID": "436",
                   "Mask": "[\\s\\S]*",
                   "Name": "lastname",
                   "ServiceID": "1219",
                   "Tooltip": "გადამხდელის გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "თანხა",
                   "ID": "437",
                   "Mask": "[\\s\\S]*",
                   "Name": "AMOUNT",
                   "ServiceID": "1219",
                   "Tooltip": "თანხა",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ავტობუსით უბილეთოდ მგზავრობის ჯარიმა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1219.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1219",
              "ServiceType": "Standard"
         }
    },
    "1220": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "438",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1220",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ფოთის დასუფთავება",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1220.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1220",
              "ServiceType": "Standard"
         }
    },
    "1221": {
         "Parameters": [
              {
                   "Description": "ანგარიში",
                   "ID": "439",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1221",
                   "Tooltip": "ანგარიში",
                   "Type": "Text"
              },
              {
                   "Description": "ტიპი",
                   "ID": "615",
                   "Mask": "^\\d{1}$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "326",
                                  "Name": "ძირითადი პაკეტი",
                                  "ParameterID": "615",
                                  "Value": "34"
                             },
                             {
                                  "ID": "327",
                                  "Name": "დამატებითი პაკეტი",
                                  "ParameterID": "615",
                                  "Value": "0"
                             }
                        ]
                   },
                   "ServiceID": "1221",
                   "Tooltip": "ტიპი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "GlobalCom",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1221.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1221",
              "ServiceType": "Standard"
         }
    },
    "1222": {
         "Parameters": {
              "Description": "ანგარისში",
              "ID": "440",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1222",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "საერთაშორისო საქველმოქმედო ფონდი ივერიელი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Charity",
              "GroupID": "16",
              "ImgURL": "/img/services/regular/1222.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1222",
              "ServiceType": "Standard"
         }
    },
    "1223": {
         "Parameters": {
              "Description": "ანგარისში",
              "ID": "441",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1223",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Hera 2011-სამშობიარო  სახლი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1223.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1223",
              "ServiceType": "Standard"
         }
    },
    "1224": {
         "Parameters": {
              "Description": "ანგარისში",
              "ID": "442",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1224",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "GrandHost",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1224.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1224",
              "ServiceType": "Standard"
         }
    },
    "1225": {
         "Parameters": {
              "Description": "ანგარისში",
              "ID": "443",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1225",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Binebi.info",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1225.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1225",
              "ServiceType": "Standard"
         }
    },
    "1226": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "444",
                   "Mask": "^\\d{5,15}$",
                   "Name": "customercode",
                   "ServiceID": "1226",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "ტიპი",
                   "ID": "445",
                   "Mask": "^\\d+$",
                   "Name": "loanduration",
                   "Parameters": {
                        "ParameterReference": {
                             "ID": "239",
                             "Name": "სესხის დაფარვა",
                             "ParameterID": "445",
                             "Value": "0"
                        }
                   },
                   "ServiceID": "1226",
                   "Tooltip": "ტიპი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "NetCredit",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1226.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1226",
              "ServiceType": "Standard"
         }
    },
    "1227": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "446",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1227",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Line Age 2",
              "Details": "https://ru.4game.com/lineage2",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1227.png",
              "MaxAmount": "500",
              "MinAmount": "2",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1227",
              "ServiceType": "Standard"
         }
    },
    "1228": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "447",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1228",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "GAMEXP",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1228.png",
              "MaxAmount": "500",
              "MinAmount": "2",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1228",
              "ServiceType": "Standard"
         }
    },
    "1229": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "449",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1229",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Heroes of Newerth",
              "Details": "http://hon.garena.ru/",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1229.png",
              "MaxAmount": "500",
              "MinAmount": "2",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1229",
              "ServiceType": "Standard"
         }
    },
    "1230": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "450",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1230",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Warthunder",
              "Details": "https://warthunder.ru <br> You will buy GOLDEN EAGLES",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1230.png",
              "MaxAmount": "500",
              "MinAmount": "2",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1230",
              "ServiceType": "Standard"
         }
    },
    "1231": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "451",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1231",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Мини-игры@Mail.Ru",
              "Details": "http://minigames.mail.ru",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1231.png",
              "MaxAmount": "500",
              "MinAmount": "2",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1231",
              "ServiceType": "Standard"
         }
    },
    "1232": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "132",
              "Mask": "^\\d{11}$",
              "Name": "personalid",
              "ServiceID": "1232",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Jokerbros.com",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/50030.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1232",
              "ServiceType": "Standard"
         }
    },
    "1233": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "452",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1233",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Sape",
              "Details": "www.sape.ru",
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1233.png",
              "MaxAmount": "500",
              "MinAmount": "2",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1233",
              "ServiceType": "Standard"
         }
    },
    "1234": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "453",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1234",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Miralinks",
              "Details": "miralinks.ru",
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/1234.png",
              "MaxAmount": "500",
              "MinAmount": "2",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1234",
              "ServiceType": "Standard"
         }
    },
    "1235": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "455",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1235",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "1",
              "Currency": null,
              "Description": "ArcheAge",
              "Details": "http://aa.mail.ru",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1235.png",
              "MaxAmount": "500",
              "MinAmount": "2",
              "MinCommission": "0.1",
              "Rounding": "0.01",
              "ServiceID": "1235",
              "ServiceType": "Standard"
         }
    },
    "1238": {
         "Parameters": {
              "Description": "პირადობის ნომერი",
              "ID": "458",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1238",
              "Tooltip": "პირადობის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Unicredit",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1238.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1238",
              "ServiceType": "Standard"
         }
    },
    "1239": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "459",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1239",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "moneyman.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1239.png",
              "MaxAmount": "1700",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1239",
              "ServiceType": "Standard"
         }
    },
    "1240": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "460",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1240",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "creditservice.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1240.png",
              "MaxAmount": "1500",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1240",
              "ServiceType": "Standard"
         }
    },
    "1241": {
         "Parameters": [
              {
                   "Description": "ანგარიში (6 ციფრი )",
                   "ID": "462",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1241",
                   "Tooltip": "ანგარიში",
                   "Type": "Text"
              },
              {
                   "Description": "ოპერაციის ტიპი",
                   "ID": "463",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "242",
                                  "Name": "სესხის დაფარვა",
                                  "ParameterID": "463",
                                  "Value": "1"
                             },
                             {
                                  "ID": "243",
                                  "Name": "სესხის გადავადება",
                                  "ParameterID": "463",
                                  "Value": "2"
                             }
                        ]
                   },
                   "ServiceID": "1241",
                   "Tooltip": "ოპერაციის ტიპი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "OnlineCredit",
              "Details": "onlinecredit.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1241.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1241",
              "ServiceType": "Standard"
         }
    },
    "1242": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "465",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1242",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "466",
                   "Mask": "[\\s\\S]*",
                   "Name": "birthdate",
                   "ServiceID": "1242",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "თიბისი იპოთეკური სესხი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1242.png",
              "MaxAmount": "1499",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1242",
              "ServiceType": "Standard"
         }
    },
    "1243": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "467",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1243",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "468",
                   "Mask": "[\\s\\S]*",
                   "Name": "birthdate",
                   "ServiceID": "1243",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "თიბისი განვადების ბარათი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1243.png",
              "MaxAmount": "1499",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1243",
              "ServiceType": "Standard"
         }
    },
    "1244": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "469",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1244",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "470",
                   "Mask": "[\\s\\S]*",
                   "Name": "birthdate",
                   "ServiceID": "1244",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "თიბისი სწრაფი განვადება",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1244.png",
              "MaxAmount": "1499",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1244",
              "ServiceType": "Standard"
         }
    },
    "1245": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "471",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1245",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "472",
                   "Mask": "[\\s\\S]*",
                   "Name": "birthdate",
                   "ServiceID": "1245",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "თიბისი სწრაფი სესხი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1245.png",
              "MaxAmount": "1499",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1245",
              "ServiceType": "Standard"
         }
    },
    "1246": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "473",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1246",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "474",
                   "Mask": "[\\s\\S]*",
                   "Name": "birthdate",
                   "ServiceID": "1246",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "თიბისი სტუდენტური სესხი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1246.png",
              "MaxAmount": "1499",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1246",
              "ServiceType": "Standard"
         }
    },
    "1247": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "475",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1247",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "476",
                   "Mask": "[\\s\\S]*",
                   "Name": "birthdate",
                   "ServiceID": "1247",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "თიბისი სამომხმარებლო სესხი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1247.png",
              "MaxAmount": "1499",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1247",
              "ServiceType": "Standard"
         }
    },
    "1248": {
         "Parameters": {
              "Description": "პინკოდი",
              "ID": "477",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1248",
              "Tooltip": "პინკოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Pokerstars",
              "Details": "www.pokerstars.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/1248.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1248",
              "ServiceType": "Standard"
         }
    },
    "1249": {
         "Parameters": {
              "Description": "პინი",
              "ID": "478",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1249",
              "Tooltip": "პინი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Parimatch",
              "Details": "www.parimatch.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/1249.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1249",
              "ServiceType": "Standard"
         }
    },
    "1250": {
         "Parameters": {
              "Description": "პინი",
              "ID": "479",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1250",
              "Tooltip": "პინი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "O-bet",
              "Details": "www.o-bet.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/1250.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1250",
              "ServiceType": "Standard"
         }
    },
    "1251": {
         "Parameters": {
              "Description": "მომხმარებელი",
              "ID": "482",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1251",
              "Tooltip": "მომხმარებელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Steam",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1251.png",
              "MaxAmount": "500",
              "MinAmount": "1.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1251",
              "ServiceType": "Standard"
         }
    },
    "1252": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "483",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1252",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Imperium",
              "Details": "www.imperium.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1252.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1252",
              "ServiceType": "Standard"
         }
    },
    "1253": {
         "Parameters": {
              "Description": "მობილური",
              "ID": "484",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1253",
              "Tooltip": "მობილური",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Creditbet",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1253.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1253",
              "ServiceType": "Standard"
         }
    },
    "1254": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "485",
                   "Mask": "^\\d{11}$",
                   "Name": "customercode",
                   "ServiceID": "1254",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "486",
                   "Mask": "[\\s\\S]*",
                   "Name": "birthdate",
                   "ServiceID": "1254",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              },
              {
                   "Description": "ტიპი",
                   "ID": "487",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "262",
                                  "Name": "მიმდინარე ანგარიში",
                                  "ParameterID": "487",
                                  "Value": "300"
                             },
                             {
                                  "ID": "250",
                                  "Name": "მეგობარათი - სადებეტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "101"
                             },
                             {
                                  "ID": "251",
                                  "Name": "Discovery Card - სადებეტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "102"
                             },
                             {
                                  "ID": "252",
                                  "Name": "Geocell Visa Card - სადებეტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "103"
                             },
                             {
                                  "ID": "253",
                                  "Name": "VISA ELECTRON - სადებეტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "104"
                             },
                             {
                                  "ID": "254",
                                  "Name": "VISA CLASSIC - სადებეტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "105"
                             },
                             {
                                  "ID": "255",
                                  "Name": "VISA GOLD - სადებეტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "106"
                             },
                             {
                                  "ID": "256",
                                  "Name": "MINUTECARD - სადებეტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "107"
                             },
                             {
                                  "ID": "257",
                                  "Name": "მეგობარათი - საკრედიტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "201"
                             },
                             {
                                  "ID": "258",
                                  "Name": "Geocell Visa Card - საკრედიტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "202"
                             },
                             {
                                  "ID": "259",
                                  "Name": "VISA ELECTRON - საკრედიტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "203"
                             },
                             {
                                  "ID": "260",
                                  "Name": "VISA CLASSIC - საკრედიტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "204"
                             },
                             {
                                  "ID": "261",
                                  "Name": "VISA GOLD - საკრედიტო ბარათი",
                                  "ParameterID": "487",
                                  "Value": "205"
                             }
                        ]
                   },
                   "ServiceID": "1254",
                   "Tooltip": "ტიპი",
                   "Type": "List"
              },
              {
                   "Description": "SUB 2310.3872",
                   "ID": "488",
                   "Mask": "[\\s\\S]*",
                   "Name": "code",
                   "ServiceID": "1254",
                   "Tooltip": "SUB 2310.3872",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Basis Bank",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1254.png",
              "MaxAmount": "400",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1254",
              "ServiceType": "Standard"
         }
    },
    "1255": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "489",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1255",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "CCLoan",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1255.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1255",
              "ServiceType": "Standard"
         }
    },
    "1256": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "490",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1256",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დღეები",
                   "ID": "491",
                   "Mask": "[\\s\\S]*",
                   "Name": "loanduration",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "264",
                                  "Name": "10",
                                  "ParameterID": "491",
                                  "Value": "10"
                             },
                             {
                                  "ID": "266",
                                  "Name": "20",
                                  "ParameterID": "491",
                                  "Value": "20"
                             },
                             {
                                  "ID": "268",
                                  "Name": "30",
                                  "ParameterID": "491",
                                  "Value": "30"
                             }
                        ]
                   },
                   "ServiceID": "1256",
                   "Tooltip": "დღეები",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "CCLoan გადავადება",
              "Details": "სესხის გადავადება",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1256.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1256",
              "ServiceType": "Standard"
         }
    },
    "1257": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "492",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1257",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "493",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1257",
                   "Tooltip": "დღე.თვე.წელი",
                   "Type": "DateField"
              },
              {
                   "Description": "list",
                   "ID": "494",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1257",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              },
              {
                   "Description": "TBCBankAccountsHelper",
                   "ID": "510",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1257",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "თიბისი საბანკო პროდუქტები",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1257.png",
              "MaxAmount": "110",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1257",
              "ServiceType": "Standard"
         }
    },
    "1258": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "495",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1258",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "496",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1258",
                   "Tooltip": "დღე.თვე.წელი",
                   "Type": "DateField"
              },
              {
                   "Description": "list",
                   "ID": "497",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1258",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              },
              {
                   "Description": "TBCBankAccountsHelper",
                   "ID": "509",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1258",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "თიბისი ანაბარზე შეტანა",
              "Details": "ანაბარზე შეტანა",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1258.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1258",
              "ServiceType": "Standard"
         }
    },
    "1259": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "498",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1259",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დღეები",
                   "ID": "499",
                   "Mask": "^\\d+$",
                   "Name": "loanduration",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "269",
                                  "Name": "მთლიანად სესხის დაფარვა",
                                  "ParameterID": "499",
                                  "Value": "0"
                             },
                             {
                                  "ID": "270",
                                  "Name": "7",
                                  "ParameterID": "499",
                                  "Value": "7"
                             },
                             {
                                  "ID": "271",
                                  "Name": "14",
                                  "ParameterID": "499",
                                  "Value": "14"
                             },
                             {
                                  "ID": "272",
                                  "Name": "30",
                                  "ParameterID": "499",
                                  "Value": "30"
                             }
                        ]
                   },
                   "ServiceID": "1259",
                   "Tooltip": "დღეები",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "1.5",
              "Currency": null,
              "Description": "Credium",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1259.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1259",
              "ServiceType": "Standard"
         }
    },
    "1260": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "500",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1260",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "TBCCardHelper",
                   "ID": "511",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1260",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "502",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1260",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              },
              {
                   "Description": "list",
                   "ID": "501",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1260",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "თიბისი პრაიმ ქარდი",
              "Details": "Prime Card-ის შევსება",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1260.png",
              "MaxAmount": "1300",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1260",
              "ServiceType": "Standard"
         }
    },
    "1261": {
         "Parameters": [
              {
                   "Description": "TBCCardHelper",
                   "ID": "512",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1261",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "პირადი ნომერი",
                   "ID": "503",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1261",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "505",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1261",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              },
              {
                   "Description": "list",
                   "ID": "504",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1261",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "თიბისი თიბისი ქარდი",
              "Details": "TBCCard-ის შევსება",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1261.png",
              "MaxAmount": "1300",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1261",
              "ServiceType": "Standard"
         }
    },
    "1262": {
         "Parameters": [
              {
                   "Description": "TBCBankCommissionHelper",
                   "ID": "513",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1262",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "პირადი ნომერი",
                   "ID": "506",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1262",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "508",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1262",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              },
              {
                   "Description": "list",
                   "ID": "507",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1262",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "თიბისი საკომისიო დავალიანება",
              "Details": "თიბისი საკომისიო დავალიანება",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1262.png",
              "MaxAmount": "1300",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1262",
              "ServiceType": "Standard"
         }
    },
    "1263": {
         "Parameters": [
              {
                   "Description": "პირადობა",
                   "ID": "514",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1263",
                   "Tooltip": "პირადობა",
                   "Type": "Text"
              },
              {
                   "Description": "VTBBankHelper",
                   "ID": "515",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1263",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "200",
                   "ID": "516",
                   "Mask": "[\\s\\S]*",
                   "Name": "code",
                   "ServiceID": "1263",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "517",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1263",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              },
              {
                   "Description": "list",
                   "ID": "534",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1263",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "VTB - მიმდინარე ანგარიშზე თანხის შეტანა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1263.png",
              "MaxAmount": "100",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1263",
              "ServiceType": "Standard"
         }
    },
    "1264": {
         "Parameters": {
              "Description": "მობილური",
              "ID": "518",
              "Mask": "^\\d{9}$",
              "Name": "customercode",
              "ServiceID": "1264",
              "Tooltip": "მობილური",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Geocell",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1264.png",
              "MaxAmount": "1500",
              "MinAmount": "0.01",
              "MinCommission": "0.02",
              "Rounding": "0.01",
              "ServiceID": "1264",
              "ServiceType": "Standard"
         }
    },
    "1265": {
         "Parameters": [
              {
                   "Description": "მობილური",
                   "ID": "520",
                   "Mask": "^\\d{9}$",
                   "Name": "customercode",
                   "ServiceID": "1265",
                   "Tooltip": "მობილური",
                   "Type": "Text"
              },
              {
                   "Description": "პაკეტი",
                   "ID": "521",
                   "Mask": "^\\d{1,3}$",
                   "Name": "code",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "273",
                                  "Name": "მეტი S",
                                  "ParameterID": "521",
                                  "Value": "12"
                             },
                             {
                                  "ID": "274",
                                  "Name": "მეტი M",
                                  "ParameterID": "521",
                                  "Value": "13"
                             },
                             {
                                  "ID": "275",
                                  "Name": "მეტი უსასრულო",
                                  "ParameterID": "521",
                                  "Value": "14"
                             },
                             {
                                  "ID": "276",
                                  "Name": "მეტი უსასრულო+",
                                  "ParameterID": "521",
                                  "Value": "15"
                             }
                        ]
                   },
                   "ServiceID": "1265",
                   "Tooltip": "პაკეტი",
                   "Type": "List"
              },
              {
                   "Description": "0",
                   "ID": "898",
                   "Mask": "^[\\s\\S]{1,10}$",
                   "Name": "fixedpricemark_select_list",
                   "ServiceID": "1265",
                   "Tooltip": "0",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Geocell Bundles",
              "Details": "<img src=\"https://www.emoney.ge/img/services/regular/03/geocell_bundle.png\" />",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1265.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.02",
              "Rounding": "1",
              "ServiceID": "1265",
              "ServiceType": "Standard"
         }
    },
    "1266": {
         "Parameters": [
              {
                   "Description": "ანგარიში",
                   "ID": "523",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1266",
                   "Tooltip": "ანგარიში",
                   "Type": "Text"
              },
              {
                   "Description": "1",
                   "ID": "524",
                   "Mask": "[\\s\\S]*",
                   "Name": "code",
                   "ServiceID": "1266",
                   "Tooltip": "1",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "crediton.ge სესხის დაფარვა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1266.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1266",
              "ServiceType": "Standard"
         }
    },
    "1267": {
         "Parameters": [
              {
                   "Description": "ანგარიში",
                   "ID": "525",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1267",
                   "Tooltip": "ანგარიში",
                   "Type": "Text"
              },
              {
                   "Description": "2",
                   "ID": "526",
                   "Mask": "[\\s\\S]*",
                   "Name": "code",
                   "ServiceID": "1267",
                   "Tooltip": "2",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "crediton.ge სესხის გადავადება",
              "Details": "სესხის გადავადება",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1267.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1267",
              "ServiceType": "Standard"
         }
    },
    "1268": {
         "Parameters": {
              "Description": "პინი",
              "ID": "535",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1268",
              "Tooltip": "პინი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "BetMaximum",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/1268.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1268",
              "ServiceType": "Standard"
         }
    },
    "1269": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "528",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1269",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "529",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1269",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              },
              {
                   "Description": "ProCreditBankHelper",
                   "ID": "530",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1269",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "list",
                   "ID": "531",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1269",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              },
              {
                   "Description": "1",
                   "ID": "532",
                   "Mask": "[\\s\\S]*",
                   "Name": "additionalcode",
                   "ServiceID": "1269",
                   "Tooltip": null,
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": null,
                   "ID": "533",
                   "Mask": "[\\s\\S]*",
                   "Name": "code",
                   "ServiceID": "1269",
                   "Tooltip": null,
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ProCredit Account Topup",
              "Details": "თანხის გადარიცხვა შესაძლებელია მხოლოდ ფიზიკური პირისთვის. </br> არასამუშაო საათებში გადარიცხული თანხა აისახება მომდევნო საბანკო სამუშაო დღეს.",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1269.png",
              "MaxAmount": "100",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1269",
              "ServiceType": "Standard"
         }
    },
    "1270": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "184",
              "Mask": "^\\d{11}$",
              "Name": "personalid",
              "ServiceID": "1270",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "eLoan.ge",
              "Details": "eLoan სესხის დაფარვა",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1270.png",
              "MaxAmount": "800",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1270",
              "ServiceType": "Standard"
         }
    },
    "1271": {
         "Parameters": {
              "Description": "ანგარიშის ნომერი",
              "ID": "186",
              "Mask": "[\\s\\S]*",
              "Name": "accountnumber",
              "ServiceID": "1271",
              "Tooltip": "ანგარიშის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Connect.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Hosting & Domain Registration",
              "GroupID": "11",
              "ImgURL": "/img/services/regular/1271.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1271",
              "ServiceType": "Standard"
         }
    },
    "1272": {
         "Parameters": {
              "Description": "ანგარიშის ნომერი",
              "ID": "187",
              "Mask": "[\\s\\S]*",
              "Name": "accountnumber",
              "ServiceID": "1272",
              "Tooltip": "ანგარიშის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Reborn",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1272.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1272",
              "ServiceType": "Standard"
         }
    },
    "1273": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "203",
                   "Mask": "^\\d{11}$",
                   "Name": "personalid",
                   "ServiceID": "1273",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "გახანგრძლივების დრო (დღეები)",
                   "ID": "204",
                   "Mask": "^\\d+$",
                   "Name": "loanduration",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "175",
                                  "Name": "5",
                                  "ParameterID": "204",
                                  "Value": "5"
                             },
                             {
                                  "ID": "176",
                                  "Name": "10",
                                  "ParameterID": "204",
                                  "Value": "10"
                             },
                             {
                                  "ID": "177",
                                  "Name": "15",
                                  "ParameterID": "204",
                                  "Value": "15"
                             },
                             {
                                  "ID": "178",
                                  "Name": "20",
                                  "ParameterID": "204",
                                  "Value": "20"
                             },
                             {
                                  "ID": "179",
                                  "Name": "25",
                                  "ParameterID": "204",
                                  "Value": "25"
                             },
                             {
                                  "ID": "180",
                                  "Name": "30",
                                  "ParameterID": "204",
                                  "Value": "30"
                             }
                        ]
                   },
                   "ServiceID": "1273",
                   "Tooltip": "გახანგრძლივების დრო (დღეები)",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "eLoan prolongation",
              "Details": "eLoan სესხის გახანგრძლივება",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1273.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1273",
              "ServiceType": "Standard"
         }
    },
    "1274": {
         "Parameters": {
              "Description": "განცხადების ID",
              "ID": "205",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "1274",
              "Tooltip": "განცხადების ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "EQO.GE",
              "Details": "EQO.GE-ში VIP მომსახურების გადახდა",
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1274.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1274",
              "ServiceType": "Standard"
         }
    },
    "1275": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "42EC0E90C32D41D0A3A92D64D0C153EC",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1276": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "207",
              "Mask": "^\\d{5}$",
              "Name": "customercode",
              "ServiceID": "1276",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Micronet",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Hosting & Domain Registration",
              "GroupID": "11",
              "ImgURL": "/img/services/regular/1276.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1276",
              "ServiceType": "Standard"
         }
    },
    "1277": {
         "Parameters": {
              "Description": "განაცხადის ნომერი",
              "ID": "208",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1277",
              "Tooltip": "განაცხადის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "საქართველოს ეროვნული არქივი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1277.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1277",
              "ServiceType": "Standard"
         }
    },
    "1278": {
         "Parameters": {
              "Description": "ანგარიშის ნომერი",
              "ID": "209",
              "Mask": "^\\d{9,10}$",
              "Name": "accountnumber",
              "ServiceID": "1278",
              "Tooltip": "ანგარიშის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Idram",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1278.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1278",
              "ServiceType": "Standard"
         }
    },
    "1279": {
         "Parameters": {
              "Description": "აბონენტის ნომერი",
              "ID": "213",
              "Mask": "^\\d{5}|\\d{6}$",
              "Name": "customercode",
              "ServiceID": "1279",
              "Tooltip": "აბონენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "საჩხერე გაზი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1279.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1279",
              "ServiceType": "Standard"
         }
    },
    "1280": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "214",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1280",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "გორის უნივერსიტეტი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1280.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1280",
              "ServiceType": "Standard"
         }
    },
    "1281": {
         "Parameters": {
              "Description": "განაცხადის ნომერი",
              "ID": "215",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1281",
              "Tooltip": "განაცხადის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "საჯარო რეესტრი (ბილინგი)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1281.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1281",
              "ServiceType": "Standard"
         }
    },
    "1282": {
         "Parameters": [
              {
                   "Description": "სადაზღვევო პოლისის ნომერი",
                   "ID": "210",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1282",
                   "Tooltip": "სადაზღვევო პოლისის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "პირადი ნომერი",
                   "ID": "211",
                   "Mask": "[\\s\\S]*",
                   "Name": "personalid",
                   "ServiceID": "1282",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "პროდუქტი",
                   "ID": "212",
                   "Mask": "^\\d+$",
                   "Name": "product",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "181",
                                  "Name": "ავტო",
                                  "ParameterID": "212",
                                  "Value": "2"
                             },
                             {
                                  "ID": "182",
                                  "Name": "ქონება",
                                  "ParameterID": "212",
                                  "Value": "3"
                             }
                        ]
                   },
                   "ServiceID": "1282",
                   "Tooltip": "პროდუქტი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "IC Group",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1282.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1282",
              "ServiceType": "Standard"
         }
    },
    "1283": {
         "Parameters": {
              "Description": "ანგარიშის ნომერი",
              "ID": "216",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1283",
              "Tooltip": "ანგარიშის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Camex",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1283.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1283",
              "ServiceType": "Standard"
         }
    },
    "1284": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "217",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1284",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "წმინდა ალექსი შუშანიას სახელობის მართლმადიდებლური სკოლა-გიმნაზია",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1284.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1284",
              "ServiceType": "Standard"
         }
    },
    "1285": {
         "Parameters": {
              "Description": "აბონენტის ნომერი",
              "ID": "218",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1285",
              "Tooltip": "აბონენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "მელიორაცია",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1285.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1285",
              "ServiceType": "Standard"
         }
    },
    "1286": {
         "Parameters": {
              "Description": "აბონენტის ნომერი",
              "ID": "219",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1286",
              "Tooltip": "აბონენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Shoni-TV",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1286.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1286",
              "ServiceType": "Standard"
         }
    },
    "1287": {
         "Parameters": {
              "Description": "აბონენტის ნომერი",
              "ID": "220",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1287",
              "Tooltip": "აბონენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Livestore.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1287.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1287",
              "ServiceType": "Standard"
         }
    },
    "1288": {
         "Parameters": {
              "Description": "618",
              "ID": "221",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1288",
              "Tooltip": "აბონენტისკოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Gasko + სენაკის გაზი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1288.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1288",
              "ServiceType": "Standard"
         }
    },
    "1289": {
         "Parameters": {
              "Description": "ოთახის ნომერი",
              "ID": "536",
              "Mask": "^(u|U|)\\d{3,10}$",
              "Name": "customercode",
              "ServiceID": "1289",
              "Tooltip": "ოთახის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "USA2Georgia",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1289.png",
              "MaxAmount": "1000",
              "MinAmount": "0.1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1289",
              "ServiceType": "Standard"
         }
    },
    "1290": {
         "Parameters": [
              {
                   "Description": "აბონენტის ნომერი",
                   "ID": "222",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1290",
                   "Tooltip": "აბონენტის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "517",
                   "ID": "223",
                   "Mask": "[\\s\\S]*",
                   "Name": "product",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "183",
                                  "Name": "სააბონენტო გადასახადი",
                                  "ParameterID": "223",
                                  "Value": "1"
                             },
                             {
                                  "ID": "184",
                                  "Name": "ჩაჭრა-აღდგენის სერვისი",
                                  "ParameterID": "223",
                                  "Value": "2"
                             }
                        ]
                   },
                   "ServiceID": "1290",
                   "Tooltip": "517",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "საქორგგაზი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1290.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1290",
              "ServiceType": "Standard"
         }
    },
    "1291": {
         "Parameters": [
              {
                   "Description": "დოკუმენტის ნომერი",
                   "ID": "224",
                   "Mask": "^\\d+$",
                   "Name": "customercode",
                   "ServiceID": "1291",
                   "Tooltip": "დოკუმენტის ნომერი",
                   "Type": "OptionalTextField"
              },
              {
                   "Description": "სერვისი",
                   "ID": "225",
                   "Mask": "^\\d+$",
                   "Name": "product",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "185",
                                  "Name": "ექსპერტიზის დანიშვნის დოკუმენტის ნომრით გადახდა",
                                  "ParameterID": "225",
                                  "Value": "1"
                             },
                             {
                                  "ID": "186",
                                  "Name": "წინასწარი გადახდა",
                                  "ParameterID": "225",
                                  "Value": "2"
                             }
                        ]
                   },
                   "ServiceID": "1291",
                   "Tooltip": "სერვისი",
                   "Type": "List"
              },
              {
                   "Description": "პირადი ნომერი",
                   "ID": "226",
                   "Mask": "^\\d+$",
                   "Name": "personalid",
                   "ServiceID": "1291",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ლევან სამხარაულის სახელობის სასამართლო ექსპერტიზის ეროვნული ბიურო",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1291.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1291",
              "ServiceType": "Standard"
         }
    },
    "1295": {
         "Parameters": {
              "Description": "მომხმარებლის სახელი",
              "ID": "234",
              "Mask": "[\\s\\S]*",
              "Name": "accountnumber",
              "ServiceID": "1295",
              "Tooltip": "მომხმარებლის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2.5",
              "Currency": null,
              "Description": "unison",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1295.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1295",
              "ServiceType": "Standard"
         }
    },
    "1296": {
         "Parameters": [
              {
                   "Description": "შეიყვანეთ სესხის ნომერი",
                   "ID": "235",
                   "Mask": "[\\s\\S]*",
                   "Name": "accountnumber",
                   "ServiceID": "1296",
                   "Tooltip": "შეიყვანეთ სესხის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "ქმედება",
                   "ID": "370",
                   "Mask": "^\\d+$",
                   "Name": "loanduration",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "220",
                                  "Name": "სესხის დაფარვა",
                                  "ParameterID": "370",
                                  "Value": "1"
                             },
                             {
                                  "ID": "221",
                                  "Name": "ვადის გაგრძელება",
                                  "ParameterID": "370",
                                  "Value": "2"
                             }
                        ]
                   },
                   "ServiceID": "1296",
                   "Tooltip": "ქმედება",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Cash24",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1296.png",
              "MaxAmount": "100",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1296",
              "ServiceType": "Standard"
         }
    },
    "1297": {
         "Parameters": [
              {
                   "Description": "გადამოწმების ტიპი",
                   "ID": "480",
                   "Mask": "^\\d+$",
                   "Name": "parametertype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "246",
                                  "Name": "პირადობით",
                                  "ParameterID": "480",
                                  "Value": "0"
                             },
                             {
                                  "ID": "247",
                                  "Name": "სესხის ნომრით",
                                  "ParameterID": "480",
                                  "Value": "1"
                             }
                        ]
                   },
                   "ServiceID": "1297",
                   "Tooltip": "გადამოწმების ტიპი",
                   "Type": "List"
              },
              {
                   "Description": "0",
                   "ID": "241",
                   "Mask": "[\\s\\S]*",
                   "Name": "servicetype",
                   "ServiceID": "1297",
                   "Tooltip": "type",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "პირადი ნომერი ან სესხის ნომერი",
                   "ID": "236",
                   "Mask": "[\\s\\S]*",
                   "Name": "accountnumber",
                   "ServiceID": "1297",
                   "Tooltip": "პირადი ნომერი ან სესხის ნომერი",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "2.5",
              "Currency": null,
              "Description": "Vivus.ge სესხის დაფარვა",
              "Details": "Vivus სესხის დაფარვა",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1297.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1297",
              "ServiceType": "Standard"
         }
    },
    "1298": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "237",
                   "Mask": "^\\d+$",
                   "Name": "accountnumber",
                   "ServiceID": "1298",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "ქმედება",
                   "ID": "371",
                   "Mask": "^\\d+$",
                   "Name": "servicetype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "222",
                                  "Name": "სესხის დაფარვა",
                                  "ParameterID": "371",
                                  "Value": "0"
                             },
                             {
                                  "ID": "223",
                                  "Name": "კრედიტის გახანგრძლივება",
                                  "ParameterID": "371",
                                  "Value": "1"
                             }
                        ]
                   },
                   "ServiceID": "1298",
                   "Tooltip": "ქმედება",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2.5",
              "Currency": null,
              "Description": "Masesxe.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1298.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1298",
              "ServiceType": "Standard"
         }
    },
    "1299": {
         "Parameters": {
              "Description": "მომხმარებლის სახელი",
              "ID": "238",
              "Mask": "[\\s\\S]*",
              "Name": "accountnumber",
              "ServiceID": "1299",
              "Tooltip": "მომხმარებლის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2.5",
              "Currency": null,
              "Description": "Lazika Сapital",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1299.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1299",
              "ServiceType": "Standard"
         }
    },
    "1300": {
         "Parameters": {
              "Description": "e-mail",
              "ID": "137",
              "Mask": "^[a-zA-Z0-9\\!\\#\\$\\%\\^\\&amp;\\@\\*\\(\\)_\\+\\.\\?\\,\\-]{6,64}$",
              "Name": "customercode",
              "ServiceID": "1300",
              "Tooltip": "e-mail",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "odnoklassniki.ru",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1300.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1300",
              "ServiceType": "Standard"
         }
    },
    "1301": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "140",
              "Mask": "[a-z0-9]+[_a-z0-9\\.-]*[a-z0-9]+@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})",
              "Name": "customercode",
              "ServiceID": "1301",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "World of Tanks RU",
              "Details": "RU",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1301.png",
              "MaxAmount": "500",
              "MinAmount": "1.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1301",
              "ServiceType": "Standard"
         }
    },
    "1302": {
         "Parameters": {
              "Description": "e-mail",
              "ID": "141",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1302",
              "Tooltip": "e-mail",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Gamenet",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1302.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1302",
              "ServiceType": "Standard"
         }
    },
    "1303": {
         "Parameters": {
              "Description": "ID",
              "ID": "142",
              "Mask": "^.{1,20}$",
              "Name": "customercode",
              "ServiceID": "1303",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Tanki Online",
              "Details": "www.tankionline.com",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1303.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1303",
              "ServiceType": "Standard"
         }
    },
    "1304": {
         "Parameters": {
              "Description": "Account",
              "ID": "143",
              "Mask": "^.{1,20}$",
              "Name": "customercode",
              "ServiceID": "1304",
              "Tooltip": "Account",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Perfect World (pw.mail.ru)",
              "Details": "pw.mail.ru",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1304.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1304",
              "ServiceType": "Standard"
         }
    },
    "1305": {
         "Parameters": {
              "Description": "Account",
              "ID": "144",
              "Mask": "^.{1,15}$",
              "Name": "customercode",
              "ServiceID": "1305",
              "Tooltip": "Account",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Аллоды Онлайн",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1305.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1305",
              "ServiceType": "Standard"
         }
    },
    "1306": {
         "Parameters": {
              "Description": "Account",
              "ID": "145",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1306",
              "Tooltip": "Account",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "CrossFire",
              "Details": "cfire.mail.ru",
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1306.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1306",
              "ServiceType": "Standard"
         }
    },
    "1307": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "146",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1307",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ПараПа: Город Танцев",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1307.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1307",
              "ServiceType": "Standard"
         }
    },
    "1308": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "147",
              "Mask": "^.{1,15}$",
              "Name": "customercode",
              "ServiceID": "1308",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Джаггернаут",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1308.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1308",
              "ServiceType": "Standard"
         }
    },
    "1309": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "148",
              "Mask": "^.{1,17}$",
              "Name": "customercode",
              "ServiceID": "1309",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Легенда: Наследие драконов (фэо-прайм)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1309.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1309",
              "ServiceType": "Standard"
         }
    },
    "1310": {
         "Parameters": {
              "Description": "e-mail",
              "ID": "149",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1310",
              "Tooltip": "e-mail",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Warface",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1310.png",
              "MaxAmount": "500",
              "MinAmount": "1.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1310",
              "ServiceType": "Standard"
         }
    },
    "1311": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "150",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1311",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Поднебесье",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1311.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1311",
              "ServiceType": "Standard"
         }
    },
    "1312": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "151",
              "Mask": "^.{1,16}$",
              "Name": "customercode",
              "ServiceID": "1312",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Легенда: Наследие драконов (фэо-минор)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1312.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1312",
              "ServiceType": "Standard"
         }
    },
    "1313": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "152",
              "Mask": "^.{1,16}$",
              "Name": "customercode",
              "ServiceID": "1313",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Троецарствие",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1313.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1313",
              "ServiceType": "Standard"
         }
    },
    "1314": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "153",
              "Mask": "^.{1,20}$",
              "Name": "customercode",
              "ServiceID": "1314",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Герои войны и денег",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1314.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1314",
              "ServiceType": "Standard"
         }
    },
    "1315": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "154",
              "Mask": "^.{1,16}$",
              "Name": "customercode",
              "ServiceID": "1315",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Варвары",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1315.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1315",
              "ServiceType": "Standard"
         }
    },
    "1316": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "155",
              "Mask": "^.{1,15}$",
              "Name": "customercode",
              "ServiceID": "1316",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "My lands",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1316.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1316",
              "ServiceType": "Standard"
         }
    },
    "1317": {
         "Parameters": {
              "Description": "Login",
              "ID": "156",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1317",
              "Tooltip": "Login",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ZZima.com",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1317.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1317",
              "ServiceType": "Standard"
         }
    },
    "1318": {
         "Parameters": {
              "Description": "Gamer ID",
              "ID": "158",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1318",
              "Tooltip": "Gamer ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Mgates",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1318.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1318",
              "ServiceType": "Standard"
         }
    },
    "1319": {
         "Parameters": [
              {
                   "Description": "ხელშეკრულების ნომერი",
                   "ID": "157",
                   "Mask": "^\\d+$",
                   "Name": "product",
                   "ServiceID": "1319",
                   "Tooltip": "ხელშეკრულების ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "list",
                   "ID": "686",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1319",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              },
              {
                   "Description": "კოდი",
                   "ID": "687",
                   "Mask": "^\\d+$",
                   "Name": "additionalcode",
                   "ServiceID": "1319",
                   "Tooltip": "კოდი",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "1.5",
              "Currency": null,
              "Description": "Smartfinance სესხის დაფარვა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1319.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1319",
              "ServiceType": "Standard"
         }
    },
    "1320": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "162",
              "Mask": "^.{1,29}$",
              "Name": "customercode",
              "ServiceID": "1320",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "11х11 футбольный менеджер",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1320.png",
              "MaxAmount": "500",
              "MinAmount": "2",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1320",
              "ServiceType": "Standard"
         }
    },
    "1321": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "161",
              "Mask": "^.{1,19}$",
              "Name": "customercode",
              "ServiceID": "1321",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "BananaWars",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1321.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1321",
              "ServiceType": "Standard"
         }
    },
    "1322": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "160",
              "Mask": "^.{1,24}$",
              "Name": "customercode",
              "ServiceID": "1322",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Гладиаторы",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1322.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1322",
              "ServiceType": "Standard"
         }
    },
    "1323": {
         "Parameters": {
              "Description": "Referal number",
              "ID": "159",
              "Mask": "^\\d{1,19}$",
              "Name": "customercode",
              "ServiceID": "1323",
              "Tooltip": "Referal number",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Atom fishing",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1323.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1323",
              "ServiceType": "Standard"
         }
    },
    "1324": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "182",
              "Mask": "^.{1,30}$",
              "Name": "customercode",
              "ServiceID": "1324",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "One World",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1324.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1324",
              "ServiceType": "Standard"
         }
    },
    "1325": {
         "Parameters": {
              "Description": "Gamer ID",
              "ID": "181",
              "Mask": "^\\d{1,14}$",
              "Name": "customercode",
              "ServiceID": "1325",
              "Tooltip": "Gamer ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Садовая империя",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1325.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1325",
              "ServiceType": "Standard"
         }
    },
    "1326": {
         "Parameters": {
              "Description": "Gamer ID",
              "ID": "180",
              "Mask": "^\\d{1,16}$",
              "Name": "customercode",
              "ServiceID": "1326",
              "Tooltip": "Gamer ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Моя деревня",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1326.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1326",
              "ServiceType": "Standard"
         }
    },
    "1327": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "179",
              "Mask": "^.{1,16}$",
              "Name": "customercode",
              "ServiceID": "1327",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Sky2Fly",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1327.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1327",
              "ServiceType": "Standard"
         }
    },
    "1328": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "178",
              "Mask": "^.{1,24}$",
              "Name": "customercode",
              "ServiceID": "1328",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Ганджубасовые войны",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1328.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1328",
              "ServiceType": "Standard"
         }
    },
    "1329": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "177",
              "Mask": "^.{1,24}$",
              "Name": "customercode",
              "ServiceID": "1329",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Haddan",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1329.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1329",
              "ServiceType": "Standard"
         }
    },
    "1330": {
         "Parameters": {
              "Description": "Login",
              "ID": "176",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1330",
              "Tooltip": "Login",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Лордмансер",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1330.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1330",
              "ServiceType": "Standard"
         }
    },
    "1331": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "175",
              "Mask": "^.{1,16}$",
              "Name": "customercode",
              "ServiceID": "1331",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "U.N.I.T.",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1331.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1331",
              "ServiceType": "Standard"
         }
    },
    "1332": {
         "Parameters": {
              "Description": "Gamer ID",
              "ID": "174",
              "Mask": "^d{1,22}$",
              "Name": "customercode",
              "ServiceID": "1332",
              "Tooltip": "Gamer ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Дозоры",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1332.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1332",
              "ServiceType": "Standard"
         }
    },
    "1333": {
         "Parameters": {
              "Description": "Login",
              "ID": "173",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1333",
              "Tooltip": "Login",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "World of Battles",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1333.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1333",
              "ServiceType": "Standard"
         }
    },
    "1334": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "172",
              "Mask": "^.{1,21}$",
              "Name": "customercode",
              "ServiceID": "1334",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Осада Онлайн",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1334.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1334",
              "ServiceType": "Standard"
         }
    },
    "1335": {
         "Parameters": {
              "Description": "Account",
              "ID": "171",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1335",
              "Tooltip": "Account",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Звездные Бои",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1335.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1335",
              "ServiceType": "Standard"
         }
    },
    "1336": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "170",
              "Mask": "^.{1,16}$",
              "Name": "customercode",
              "ServiceID": "1336",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "TimeZero Prima",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1336.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1336",
              "ServiceType": "Standard"
         }
    },
    "1337": {
         "Parameters": {
              "Description": "Payment ID",
              "ID": "169",
              "Mask": "^\\d{1,16}$",
              "Name": "customercode",
              "ServiceID": "1337",
              "Tooltip": "Payment ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Battle of Immortals",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1337.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1337",
              "ServiceType": "Standard"
         }
    },
    "1338": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "168",
              "Mask": "^.{1,16}$",
              "Name": "customercode",
              "ServiceID": "1338",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Легенда: Наследие драконов (фэо-медиант)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1338.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1338",
              "ServiceType": "Standard"
         }
    },
    "1339": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "167",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1339",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Last Chaos",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1339.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1339",
              "ServiceType": "Standard"
         }
    },
    "1340": {
         "Parameters": {
              "Description": "Gamer ID",
              "ID": "166",
              "Mask": "^\\d{1,7}$",
              "Name": "customercode",
              "ServiceID": "1340",
              "Tooltip": "Gamer ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Lava-Online",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1340.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1340",
              "ServiceType": "Standard"
         }
    },
    "1341": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "165",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1341",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Острова",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1341.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1341",
              "ServiceType": "Standard"
         }
    },
    "1342": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "164",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1342",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Bloody World",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1342.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1342",
              "ServiceType": "Standard"
         }
    },
    "1343": {
         "Parameters": {
              "Description": "Gamer ID",
              "ID": "163",
              "Mask": "^\\d{1,9}$",
              "Name": "customercode",
              "ServiceID": "1343",
              "Tooltip": "Gamer ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Пути истории",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1343.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1343",
              "ServiceType": "Standard"
         }
    },
    "1344": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "252",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1344",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "bs.ru",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1344.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1344",
              "ServiceType": "Standard"
         }
    },
    "1345": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "253",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1345",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Magic World 2",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1345.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1345",
              "ServiceType": "Standard"
         }
    },
    "1346": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "254",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1346",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Combat Arms",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1346.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1346",
              "ServiceType": "Standard"
         }
    },
    "1347": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "255",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1347",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Golden Age",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1347.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1347",
              "ServiceType": "Standard"
         }
    },
    "1348": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "256",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1348",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Aika Online",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1348.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1348",
              "ServiceType": "Standard"
         }
    },
    "1349": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "257",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1349",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Firestorm",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1349.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1349",
              "ServiceType": "Standard"
         }
    },
    "1350": {
         "Parameters": {
              "Description": "ID",
              "ID": "258",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1350",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Война: Ангелы и Демоны",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1350.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1350",
              "ServiceType": "Standard"
         }
    },
    "1351": {
         "Parameters": {
              "Description": "ID",
              "ID": "259",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1351",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Тюрьма. Новый Срок",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1351.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1351",
              "ServiceType": "Standard"
         }
    },
    "1352": {
         "Parameters": {
              "Description": "ID",
              "ID": "260",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1352",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Герои",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1352.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1352",
              "ServiceType": "Standard"
         }
    },
    "1353": {
         "Parameters": {
              "Description": "ID",
              "ID": "261",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1353",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Битва Фермеров",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1353.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1353",
              "ServiceType": "Standard"
         }
    },
    "1354": {
         "Parameters": {
              "Description": "ID",
              "ID": "262",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1354",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Удивительный колхоз",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1354.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1354",
              "ServiceType": "Standard"
         }
    },
    "1355": {
         "Parameters": {
              "Description": "ნიკნეიმი",
              "ID": "263",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1355",
              "Tooltip": "ნიკნეიმი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "spaces.ru",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1355.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1355",
              "ServiceType": "Standard"
         }
    },
    "1356": {
         "Parameters": {
              "Description": "ID",
              "ID": "264",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1356",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Super Race",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1356.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1356",
              "ServiceType": "Standard"
         }
    },
    "1357": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "265",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1357",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Panzar",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1357.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1357",
              "ServiceType": "Standard"
         }
    },
    "1358": {
         "Parameters": {
              "Description": "ნიკნეიმი",
              "ID": "266",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1358",
              "Tooltip": "ნიკნეიმი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Битва титанов",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1358.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1358",
              "ServiceType": "Standard"
         }
    },
    "1359": {
         "Parameters": {
              "Description": "ID",
              "ID": "267",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1359",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Небоскребы",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1359.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1359",
              "ServiceType": "Standard"
         }
    },
    "1360": {
         "Parameters": {
              "Description": "ID",
              "ID": "268",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1360",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Танки",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1360.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1360",
              "ServiceType": "Standard"
         }
    },
    "1361": {
         "Parameters": {
              "Description": "მომხმარებლის ნიკი",
              "ID": "269",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1361",
              "Tooltip": "მომხმარებლის ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Ice Kings",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1361.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1361",
              "ServiceType": "Standard"
         }
    },
    "1362": {
         "Parameters": {
              "Description": "მომხმარებლის ნიკი",
              "ID": "270",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1362",
              "Tooltip": "მომხმარებლის ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Золотая Бутса",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1362.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1362",
              "ServiceType": "Standard"
         }
    },
    "1363": {
         "Parameters": {
              "Description": "მომხმარებლის ნიკი",
              "ID": "271",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1363",
              "Tooltip": "მომხმარებლის ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Грани реальности",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1363.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1363",
              "ServiceType": "Standard"
         }
    },
    "1364": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "272",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1364",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Lost Magic",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1364.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1364",
              "ServiceType": "Standard"
         }
    },
    "1365": {
         "Parameters": {
              "Description": "ID",
              "ID": "273",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1365",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ВГороде",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1365.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1365",
              "ServiceType": "Standard"
         }
    },
    "1366": {
         "Parameters": {
              "Description": "ნიკი",
              "ID": "274",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1366",
              "Tooltip": "ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Повелители",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1366.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1366",
              "ServiceType": "Standard"
         }
    },
    "1367": {
         "Parameters": {
              "Description": "ნიკი",
              "ID": "275",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1367",
              "Tooltip": "ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Техномагия2",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1367.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1367",
              "ServiceType": "Standard"
         }
    },
    "1368": {
         "Parameters": {
              "Description": "ნიკი",
              "ID": "276",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1368",
              "Tooltip": "ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "neverland",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1368.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1368",
              "ServiceType": "Standard"
         }
    },
    "1369": {
         "Parameters": {
              "Description": "მომხმარებლის ნიკი",
              "ID": "277",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1369",
              "Tooltip": "მომხმარებლის ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "UFO online",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1369.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1369",
              "ServiceType": "Standard"
         }
    },
    "1370": {
         "Parameters": {
              "Description": "მომხმარებლის ნიკი",
              "ID": "278",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1370",
              "Tooltip": "მომხმარებლის ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Kw.rambler.ru ( Княжеские воины)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1370.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1370",
              "ServiceType": "Standard"
         }
    },
    "1371": {
         "Parameters": {
              "Description": "მომხმარებლის ნიკი",
              "ID": "279",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1371",
              "Tooltip": "მომხმარებლის ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Последний предел",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1371.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1371",
              "ServiceType": "Standard"
         }
    },
    "1372": {
         "Parameters": {
              "Description": "მომხმარებლის ნიკი",
              "ID": "280",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1372",
              "Tooltip": "მომხმარებლის ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Край Мира",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1372.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1372",
              "ServiceType": "Standard"
         }
    },
    "1373": {
         "Parameters": {
              "Description": "მომხმარებლის ნიკი",
              "ID": "281",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1373",
              "Tooltip": "მომხმარებლის ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Передовая",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1373.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1373",
              "ServiceType": "Standard"
         }
    },
    "1374": {
         "Parameters": {
              "Description": "მომხმარებლის ნიკი",
              "ID": "282",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1374",
              "Tooltip": "მომხმარებლის ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Z-WAR",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1374.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1374",
              "ServiceType": "Standard"
         }
    },
    "1375": {
         "Parameters": {
              "Description": "ID",
              "ID": "283",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1375",
              "Tooltip": "ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Art of War 2",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1375.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1375",
              "ServiceType": "Standard"
         }
    },
    "1376": {
         "Parameters": {
              "Description": "ნიკი",
              "ID": "284",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1376",
              "Tooltip": "ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Hullywood",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1376.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1376",
              "ServiceType": "Standard"
         }
    },
    "1377": {
         "Parameters": {
              "Description": "ნიკი",
              "ID": "285",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1377",
              "Tooltip": "ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Территория 2",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1377.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1377",
              "ServiceType": "Standard"
         }
    },
    "1378": {
         "Parameters": {
              "Description": "ნიკი",
              "ID": "286",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1378",
              "Tooltip": "ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Torment",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1378.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1378",
              "ServiceType": "Standard"
         }
    },
    "1379": {
         "Parameters": {
              "Description": "ნიკი",
              "ID": "287",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1379",
              "Tooltip": "ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Berserk.ru",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1379.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1379",
              "ServiceType": "Standard"
         }
    },
    "1380": {
         "Parameters": {
              "Description": "ნიკი",
              "ID": "288",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1380",
              "Tooltip": "ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Эпоха Хаоса",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1380.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1380",
              "ServiceType": "Standard"
         }
    },
    "1381": {
         "Parameters": {
              "Description": "ნიკი",
              "ID": "289",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1381",
              "Tooltip": "ნიკი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Колонизаторы",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1381.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1381",
              "ServiceType": "Standard"
         }
    },
    "1382": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "537",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1382",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ბათუმის წყალი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1382.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1382",
              "ServiceType": "Standard"
         }
    },
    "1383": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "538",
              "Mask": "^\\d{11}$",
              "Name": "customercode",
              "ServiceID": "1383",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "მმ ნეთვორქს",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1383.png",
              "MaxAmount": "1000",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1383",
              "ServiceType": "Standard"
         }
    },
    "1384": {
         "Parameters": {
              "Description": "აბონენტის ნომერი",
              "ID": "539",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1384",
              "Tooltip": "აბონენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ექსტრანეტ",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1384.png",
              "MaxAmount": "1000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1384",
              "ServiceType": "Standard"
         }
    },
    "1385": {
         "Parameters": {
              "Description": "აბონენტის ნომერი",
              "ID": "540",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1385",
              "Tooltip": "აბონენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ქვემო ქართლის ტელერადიო კომპანია",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1385.png",
              "MaxAmount": "100",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1385",
              "ServiceType": "Standard"
         }
    },
    "1386": {
         "Parameters": {
              "Description": "ტელეფონის ნომერი",
              "ID": "541",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1386",
              "Tooltip": "ტელეფონის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "გუდლაინი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1386.png",
              "MaxAmount": "500",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1386",
              "ServiceType": "Standard"
         }
    },
    "1387": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "542",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1387",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ეს ჯი გაზ კომპანი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1387.png",
              "MaxAmount": "1000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1387",
              "ServiceType": "Standard"
         }
    },
    "1388": {
         "Parameters": {
              "Description": "აბონენტის ნომერი",
              "ID": "543",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1388",
              "Tooltip": "აბონენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "საჩხერის წყალკანალი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1388.png",
              "MaxAmount": "200",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1388",
              "ServiceType": "Standard"
         }
    },
    "1389": {
         "Parameters": {
              "Description": "აბონტენტის ნომერი",
              "ID": "544",
              "Mask": "^\\d{1,10}$",
              "Name": "customercode",
              "ServiceID": "1389",
              "Tooltip": "აბონტენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ტელევიზია კახეთი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1389.png",
              "MaxAmount": "500",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1389",
              "ServiceType": "Standard"
         }
    },
    "1390": {
         "Parameters": {
              "Description": "პირადი ან ამანათის კოდი",
              "ID": "545",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1390",
              "Tooltip": "პირადი ან ამანათის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ბესტექსი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1390.png",
              "MaxAmount": "5000",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1390",
              "ServiceType": "Standard"
         }
    },
    "1391": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "546",
              "Mask": "^.*$",
              "Name": "customercode",
              "ServiceID": "1391",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "კამექსი (camex.ge)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1391.png",
              "MaxAmount": "1500",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1391",
              "ServiceType": "Standard"
         }
    },
    "1392": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "547",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1392",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "LINEX",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1392.png",
              "MaxAmount": "1000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1392",
              "ServiceType": "Standard"
         }
    },
    "1393": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "548",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1393",
              "Tooltip": "აბონენტის კოდი LIV1 XXXXXX",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "LIVESTORE",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1393.png",
              "MaxAmount": "1000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1393",
              "ServiceType": "Standard"
         }
    },
    "1394": {
         "Parameters": {
              "Description": "მობილურის ნომერი",
              "ID": "549",
              "Mask": "^\\d{9}$",
              "Name": "customercode",
              "ServiceID": "1394",
              "Tooltip": "მობილურის ნომერი 9 ციფრი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "eBay Georgia",
              "Details": "ebaygeorgia.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1394.png",
              "MaxAmount": "5000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1394",
              "ServiceType": "Standard"
         }
    },
    "1395": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "550",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1395",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ULTRANET",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1395.png",
              "MaxAmount": "1000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1395",
              "ServiceType": "Standard"
         }
    },
    "1396": {
         "Parameters": [
              {
                   "Description": "პირადი ან მანქანის ნომერი",
                   "ID": "551",
                   "Mask": "^(.{6})|(.{7})|(\\d{11})$",
                   "Name": "customercode",
                   "ServiceID": "1396",
                   "Tooltip": "პირადი ან მანქანის ნომერი(XXXXXX)",
                   "Type": "Text"
              },
              {
                   "Description": "list",
                   "ID": "594",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1396",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              },
              {
                   "Description": "CTParkFineHelper",
                   "ID": "595",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1396",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "სი-ტი პარკის ჯარიმა",
              "Details": "ჯარიმის გადასახადი",
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1396.png",
              "MaxAmount": "50",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1396",
              "ServiceType": "Standard"
         }
    },
    "1397": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "552",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1397",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "გარემოს ეროვნული სააგენტო",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1397.png",
              "MaxAmount": "1000",
              "MinAmount": "10",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1397",
              "ServiceType": "Standard"
         }
    },
    "1398": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "553",
              "Mask": "^\\d{11}$",
              "Name": "customercode",
              "ServiceID": "1398",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "კავკასიის უნივერსიტეტი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1398.png",
              "MaxAmount": "15000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1398",
              "ServiceType": "Standard"
         }
    },
    "1399": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "554",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1399",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "კავკასიის საერთაშორისო უნივერსიტეტი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1399.png",
              "MaxAmount": "5000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1399",
              "ServiceType": "Standard"
         }
    },
    "1400": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "555",
              "Mask": "^\\d{11}$",
              "Name": "customercode",
              "ServiceID": "1400",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "თბილისის აპოლონ ქუთათელაძის სახელობის სახელმწიფო სამხატვრო აკადემია",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1400.png",
              "MaxAmount": "6000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1400",
              "ServiceType": "Standard"
         }
    },
    "1401": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "556",
              "Mask": "^\\d{11}$",
              "Name": "customercode",
              "ServiceID": "1401",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "საქართველოს ეროვნული უნივერსიტეტი - სეუ",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1401.png",
              "MaxAmount": "6000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1401",
              "ServiceType": "Standard"
         }
    },
    "1402": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "557",
              "Mask": "^\\d{11}$",
              "Name": "customercode",
              "ServiceID": "1402",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ბათუმის სახელმწიფო საზღვაო აკადემია",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1402.png",
              "MaxAmount": "3000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1402",
              "ServiceType": "Standard"
         }
    },
    "1403": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "558",
              "Mask": "^\\d{11}$",
              "Name": "customercode",
              "ServiceID": "1403",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "თავისუფალი უნივერსიტეტი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Books & Learning",
              "GroupID": "13",
              "ImgURL": "/img/services/regular/1403.png",
              "MaxAmount": "10000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1403",
              "ServiceType": "Standard"
         }
    },
    "1404": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "559",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1404",
              "Tooltip": "პირველ ჯერზე: აპარატის რეგისტრაციის განაცხადის ნომერი, მერე: DYXXXXXXXX",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ჯორჯიან სერვის ნეთვორკი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1404.png",
              "MaxAmount": "10000",
              "MinAmount": "5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1404",
              "ServiceType": "Standard"
         }
    },
    "1405": {
         "Parameters": [
              {
                   "Description": "მიმღები",
                   "ID": "560",
                   "Mask": "[\\s\\S]{3,50}",
                   "Name": "customercode",
                   "ServiceID": "1405",
                   "Tooltip": "ელფოსტა/ტელეფონი/eMoney ანგარიში. მობილურის ნომრის მითითების შემთხვევაში მიმღებს გაეგზავნება SMS შეტყობინება და ბიტკოინების მისაღებად საჭიროა შემოვიდეს eMoney-ის სისტემაში ან თუ არ ფლობს საფულეს, მოცემული ნომრით გაიაროს რეგისტრაცია",
                   "Type": "Text"
              },
              {
                   "Description": "BTC",
                   "ID": "561",
                   "Mask": "[\\s\\S]{3,5}",
                   "Name": "tocurrency",
                   "ServiceID": "1405",
                   "Tooltip": "BTC",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Buy Bitcoin",
              "Details": "<a href=\"http://bitcoin.emoney.ge\" target=\"_blank\" style=\"color:orange\">eMoney Bitcoin Blog</a><br><a href=\"https://bitcoin.org/en/getting-started\" target=\"_blank\" style=\"color:white\">Getting Started With Bitcoins</a>",
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1405.png",
              "MaxAmount": "1501",
              "MinAmount": "0.1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1405",
              "ServiceType": "Standard"
         }
    },
    "1406": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "562",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1406",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "563",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1406",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              },
              {
                   "Description": "FincaBankHelper",
                   "ID": "564",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1406",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "list",
                   "ID": "565",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1406",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              },
              {
                   "Description": "2310.3872",
                   "ID": "566",
                   "Mask": "[\\s\\S]*",
                   "Name": "additionalcode",
                   "ServiceID": "1406",
                   "Tooltip": "2310.3872",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Finca account topup",
              "Details": "ანგარიშის შევსება",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1406.png",
              "MaxAmount": "100",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1406",
              "ServiceType": "Standard"
         }
    },
    "1407": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "567",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1407",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "568",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1407",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              },
              {
                   "Description": "BTABankHelper",
                   "ID": "569",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1407",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "1",
                   "ID": "570",
                   "Mask": "[\\s\\S]*",
                   "Name": "stepid",
                   "ServiceID": "1407",
                   "Tooltip": "1",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "list",
                   "ID": "571",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1407",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "1.5",
              "Currency": null,
              "Description": "Silk Road Bank Account Topup",
              "Details": "ანგარიშის შევსება",
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1407.png",
              "MaxAmount": "100",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1407",
              "ServiceType": "Standard"
         }
    },
    "1408": {
         "Parameters": {
              "Description": "მობილურის ნომერი",
              "ID": "572",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1408",
              "Tooltip": "მობილურის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ვესტბილდ (place.ge)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1408.png",
              "MaxAmount": "100",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1408",
              "ServiceType": "Standard"
         }
    },
    "1409": {
         "Parameters": {
              "Description": "პოლისის ნომერი",
              "ID": "573",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1409",
              "Tooltip": "პოლისის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ირაო",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1409.png",
              "MaxAmount": "1000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1409",
              "ServiceType": "Standard"
         }
    },
    "1410": {
         "Parameters": {
              "Description": "პოლისის ნომერი",
              "ID": "574",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1410",
              "Tooltip": "პოლისის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ქართუ დაზღვევა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1410.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1410",
              "ServiceType": "Standard"
         }
    },
    "1411": {
         "Parameters": {
              "Description": "პოლისის ნომერი",
              "ID": "575",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1411",
              "Tooltip": "პოლისის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "პსპ ავტოდაზღვევა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1411.png",
              "MaxAmount": "6000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1411",
              "ServiceType": "Standard"
         }
    },
    "1412": {
         "Parameters": {
              "Description": "დოკუმენტის ნომერი",
              "ID": "576",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1412",
              "Tooltip": "დოკუმენტის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ლევან სამხარაულის სახელობის სასამართლო ექსპერტიზის ეროვნული ბიურო",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1412.png",
              "MaxAmount": "5000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1412",
              "ServiceType": "Standard"
         }
    },
    "1413": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "577",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1413",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "დაცვის პოლიციის დეპარტამენტი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1413.png",
              "MaxAmount": "1300",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1413",
              "ServiceType": "Standard"
         }
    },
    "1414": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "578",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1414",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "GlobalCell",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1414.png",
              "MaxAmount": "500",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1414",
              "ServiceType": "Standard"
         }
    },
    "1415": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "579",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1415",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "მაქსიმალი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1415.png",
              "MaxAmount": "1000",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1415",
              "ServiceType": "Standard"
         }
    },
    "1416": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "580",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1416",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ეარნეტი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1416.png",
              "MaxAmount": "500",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1416",
              "ServiceType": "Standard"
         }
    },
    "1417": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "581",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1417",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Geonet",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1417.png",
              "MaxAmount": "500",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1417",
              "ServiceType": "Standard"
         }
    },
    "1418": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "583",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1418",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "GNN",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1418.png",
              "MaxAmount": "300",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1418",
              "ServiceType": "Standard"
         }
    },
    "1419": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "584",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1419",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ONEX",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1419.png",
              "MaxAmount": "1500",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1419",
              "ServiceType": "Standard"
         }
    },
    "1420": {
         "Parameters": {
              "Description": "მომხმარებლის სახელი",
              "ID": "585",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1420",
              "Tooltip": "მომხმარებლის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ალია ჰოლდინგი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1420.png",
              "MaxAmount": "1200",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1420",
              "ServiceType": "Standard"
         }
    },
    "1421": {
         "Parameters": {
              "Description": "ბოქსის ნომერი",
              "ID": "239",
              "Mask": "^(u|U)\\d{6}$",
              "Name": "accountnumber",
              "ServiceID": "1421",
              "Tooltip": "uXXXXXX",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Amanati",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1421.png",
              "MaxAmount": "500",
              "MinAmount": "1.5",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1421",
              "ServiceType": "Standard"
         }
    },
    "1422": {
         "Parameters": [
              {
                   "Description": "აბონენტის ნომერი",
                   "ID": "240",
                   "Mask": "[\\s\\S]*",
                   "Name": "accountnumber",
                   "ServiceID": "1422",
                   "Tooltip": "აბონენტის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "გადახდის ტიპი",
                   "ID": "251",
                   "Mask": "[\\s\\S]*",
                   "Name": "product",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "198",
                                  "Name": "მიმდინარე სესხის გადახდა",
                                  "ParameterID": "251",
                                  "Value": "1"
                             },
                             {
                                  "ID": "199",
                                  "Name": "SMS სერვისის საფასურის გადახდა",
                                  "ParameterID": "251",
                                  "Value": "2"
                             },
                             {
                                  "ID": "200",
                                  "Name": "ამონაწერის საფასურის გადახდა",
                                  "ParameterID": "251",
                                  "Value": "3"
                             },
                             {
                                  "ID": "201",
                                  "Name": "ბარათის დამზადების და სარგებლობის საფასურის გადახდა",
                                  "ParameterID": "251",
                                  "Value": "4"
                             }
                        ]
                   },
                   "ServiceID": "1422",
                   "Tooltip": "გადახდის ტიპი",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2.5",
              "Currency": null,
              "Description": "Credo",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1422.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1422",
              "ServiceType": "Standard"
         }
    },
    "1423": {
         "Parameters": [
              {
                   "Description": "გადამოწმების ტიპი",
                   "ID": "481",
                   "Mask": "^\\d+$",
                   "Name": "parametertype",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "248",
                                  "Name": "პირადობით",
                                  "ParameterID": "481",
                                  "Value": "0"
                             },
                             {
                                  "ID": "249",
                                  "Name": "სესხის ნომრით",
                                  "ParameterID": "481",
                                  "Value": "1"
                             }
                        ]
                   },
                   "ServiceID": "1423",
                   "Tooltip": "გადამოწმების ტიპი",
                   "Type": "List"
              },
              {
                   "Description": "პირადი ნომერი ან სესხის ნომერი",
                   "ID": "242",
                   "Mask": "[\\s\\S]*",
                   "Name": "accountnumber",
                   "ServiceID": "1423",
                   "Tooltip": "პირადი ნომერი ან სესხის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "1",
                   "ID": "243",
                   "Mask": "[\\s\\S]*",
                   "Name": "servicetype",
                   "ServiceID": "1423",
                   "Tooltip": "type",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "2.5",
              "Currency": null,
              "Description": "Vivus.ge სესხის გადავადება",
              "Details": "სესხის გადავადება შეგიძლიათ მხოლოდ სესხის ვადის ამოწურვის თარიღიდან.<br>შეკითხვების შემთხვევაში დარეკეთ 0322473737",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1423.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1423",
              "ServiceType": "Standard"
         }
    },
    "1424": {
         "Parameters": {
              "Description": "ელფოსტა",
              "ID": "244",
              "Mask": "[\\s\\S]*",
              "Name": "accountnumber",
              "ServiceID": "1424",
              "Tooltip": "ელფოსტა",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "3",
              "Currency": null,
              "Description": "Fastcredit სესხის დაფარვა",
              "Details": "FastCredit სესხის დაფარვა",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1424.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1424",
              "ServiceType": "Standard"
         }
    },
    "1425": {
         "Parameters": [
              {
                   "Description": "ელფოსტა",
                   "ID": "246",
                   "Mask": "[\\s\\S]*",
                   "Name": "accountnumber",
                   "ServiceID": "1425",
                   "Tooltip": "ელფოსტა",
                   "Type": "Text"
              },
              {
                   "Description": "დღეები",
                   "ID": "250",
                   "Mask": "^\\d+$",
                   "Name": "loanduration",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "192",
                                  "Name": "5",
                                  "ParameterID": "250",
                                  "Value": "5"
                             },
                             {
                                  "ID": "193",
                                  "Name": "10",
                                  "ParameterID": "250",
                                  "Value": "10"
                             },
                             {
                                  "ID": "194",
                                  "Name": "15",
                                  "ParameterID": "250",
                                  "Value": "15"
                             },
                             {
                                  "ID": "195",
                                  "Name": "20",
                                  "ParameterID": "250",
                                  "Value": "20"
                             },
                             {
                                  "ID": "196",
                                  "Name": "25",
                                  "ParameterID": "250",
                                  "Value": "25"
                             },
                             {
                                  "ID": "197",
                                  "Name": "30",
                                  "ParameterID": "250",
                                  "Value": "30"
                             }
                        ]
                   },
                   "ServiceID": "1425",
                   "Tooltip": "დღეების რაოდენობა",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "3",
              "Currency": null,
              "Description": "Fastcredit სესხის გადავადება",
              "Details": "FastCredit სესხის გადავადება",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1425.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1425",
              "ServiceType": "Standard"
         }
    },
    "1426": {
         "Parameters": {
              "Description": "შეკვეთის ნომერი",
              "ID": "247",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1426",
              "Tooltip": "შეკვეთის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Gasa",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1426.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1426",
              "ServiceType": "Standard"
         }
    },
    "1427": {
         "Parameters": {
              "Description": "მობილურის ნომერი",
              "ID": "586",
              "Mask": "^\\d{9}$",
              "Name": "customercode",
              "ServiceID": "1427",
              "Tooltip": "მომხმარებლის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "SMS-დღიური",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Other",
              "GroupID": "20",
              "ImgURL": "/img/services/regular/1427.png",
              "MaxAmount": "100",
              "MinAmount": "0.5",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1427",
              "ServiceType": "Standard"
         }
    },
    "1428": {
         "Parameters": {
              "Description": "აბონენტი",
              "ID": "587",
              "Mask": "^\\d{3,10}$",
              "Name": "customercode",
              "ServiceID": "1428",
              "Tooltip": "მაგ. 32XXXXXXX",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ახტელი (Akhteli)",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1428.png",
              "MaxAmount": "1000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1428",
              "ServiceType": "Standard"
         }
    },
    "1429": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "588",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1429",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "589",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1429",
                   "Tooltip": "დღე.თვე.წელი",
                   "Type": "DateField"
              },
              {
                   "Description": "list",
                   "ID": "590",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1429",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ლიბერთი ბანკის ანგარიშის შევსება",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1429.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1429",
              "ServiceType": "Standard"
         }
    },
    "1430": {
         "Parameters": [
              {
                   "Description": "ქვითრის ნომერი",
                   "ID": "591",
                   "Mask": "((^\\w{2}\\d{6}$)|(^\\w{2}\\d{9}$))",
                   "Name": "customercode",
                   "ServiceID": "1430",
                   "Tooltip": "ქვითრის ნომრის ფორმატი: თერთმეტი სიმბოლო: AAXXXXXXXXX (AA -\r\nსერია ქართული ასოებით; XXXXXXXXX – 9 ნიშნა ციფრი)",
                   "Type": "Text"
              },
              {
                   "Description": "PoliceFineHelper",
                   "ID": "592",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1430",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "პირადი ნომერი ან სახ. ნომერი ან ტექ-პასპორტი",
                   "ID": "900",
                   "Mask": "^[\\s\\S]{3,11}$",
                   "Name": "additional_parameter",
                   "ServiceID": "1430",
                   "Tooltip": "პირადი ნოერი ან სახ. ნომერი ან ტექ-პასპორტი",
                   "Type": "Text"
              },
              {
                   "Description": "0",
                   "ID": "593",
                   "Mask": "^[\\s\\S]{1,45}$",
                   "Name": "fixedpricemark_select_list",
                   "ServiceID": "1430",
                   "Tooltip": "0",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Police Fines",
              "Details": "ზუსტად შეიყვანეთ არჩეული ჯარიმის საფასური",
              "ExchangeRate": "0",
              "GroupDescription": "State Fees & Taxes",
              "GroupID": "4",
              "ImgURL": "/img/services/regular/1430.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1430",
              "ServiceType": "Standard"
         }
    },
    "1431": {
         "Parameters": [
              {
                   "Description": "eMoney ანგარიში, ტელეფონის ნომერი ან ელფოსტა",
                   "ID": "596",
                   "Mask": "[\\s\\S]{3,20}",
                   "Name": "customercode",
                   "ServiceID": "1431",
                   "Tooltip": "eMoney ანგარიში, ტელეფონის ნომერი ან ელფოსტა",
                   "Type": "Text"
              },
              {
                   "Description": "აირჩიეთ სასურველი ვალუტა",
                   "ID": "597",
                   "Mask": "[\\s\\S]{3,5}",
                   "Name": "tocurrency",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "322",
                                  "Name": "GEL",
                                  "ParameterID": "597",
                                  "Value": "GEL"
                             },
                             {
                                  "ID": "323",
                                  "Name": "USD",
                                  "ParameterID": "597",
                                  "Value": "USD"
                             },
                             {
                                  "ID": "325",
                                  "Name": "BTC",
                                  "ParameterID": "597",
                                  "Value": "BTC"
                             },
                             {
                                  "ID": "438",
                                  "Name": "LTC",
                                  "ParameterID": "597",
                                  "Value": "LTC"
                             },
                             {
                                  "ID": "439",
                                  "Name": "XRP",
                                  "ParameterID": "597",
                                  "Value": "XRP"
                             },
                             {
                                  "ID": "440",
                                  "Name": "EUR",
                                  "ParameterID": "597",
                                  "Value": "EUR"
                             },
                             {
                                  "ID": "324",
                                  "Name": "RUB",
                                  "ParameterID": "597",
                                  "Value": "RUB"
                             }
                        ]
                   },
                   "ServiceID": "1431",
                   "Tooltip": "შევსების ვალუტა",
                   "Type": "List"
              },
              {
                   "Description": "გადარიცხვის დანიშნულება",
                   "ID": "611",
                   "Mask": "[\\s\\S]{0,128}",
                   "Name": "description",
                   "ServiceID": "1431",
                   "Tooltip": "გადარიცხვის აღწერა არასავალდებულოა",
                   "Type": "OptionalTextField"
              }
         ],
         "Properties": {
              "CommissionRate": "1",
              "Currency": null,
              "Description": "Topup eMoney Wallet",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Wallets",
              "GroupID": "6",
              "ImgURL": "/img/services/regular/1431.png",
              "MaxAmount": "1500",
              "MinAmount": "0.01",
              "MinCommission": "0.01",
              "Rounding": "0.01",
              "ServiceID": "1431",
              "ServiceType": "Standard"
         }
    },
    "1432": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "601",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1432",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "გორის დასუფთავება",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1432.png",
              "MaxAmount": "500",
              "MinAmount": "0.3",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1432",
              "ServiceType": "Standard"
         }
    },
    "1433": {
         "Parameters": [
              {
                   "Description": "ინვოისის ნომერი",
                   "ID": "602",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1433",
                   "Tooltip": "XXXXX/XXXXXXX ინვოისის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "list",
                   "ID": "605",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1433",
                   "Tooltip": null,
                   "Type": "TwoStepSingleselect"
              },
              {
                   "Description": "FineHelper",
                   "ID": "608",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1433",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "საქართველოს ფოსტა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1433.png",
              "MaxAmount": "5000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1433",
              "ServiceType": "Standard"
         }
    },
    "1434": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "604",
              "Mask": "^\\d{11}$",
              "Name": "customercode",
              "ServiceID": "1434",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ElCredit სესხის დაფარვა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1434.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1434",
              "ServiceType": "Standard"
         }
    },
    "1435": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "606",
                   "Mask": "^\\d{11}$",
                   "Name": "customercode",
                   "ServiceID": "1435",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დღეები",
                   "ID": "607",
                   "Mask": "^\\d+$",
                   "Name": "loanduration",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "289",
                                  "Name": "1",
                                  "ParameterID": "607",
                                  "Value": "1"
                             },
                             {
                                  "ID": "290",
                                  "Name": "2",
                                  "ParameterID": "607",
                                  "Value": "2"
                             },
                             {
                                  "ID": "291",
                                  "Name": "3",
                                  "ParameterID": "607",
                                  "Value": "3"
                             },
                             {
                                  "ID": "292",
                                  "Name": "4",
                                  "ParameterID": "607",
                                  "Value": "4"
                             },
                             {
                                  "ID": "293",
                                  "Name": "5",
                                  "ParameterID": "607",
                                  "Value": "5"
                             },
                             {
                                  "ID": "294",
                                  "Name": "6",
                                  "ParameterID": "607",
                                  "Value": "6"
                             },
                             {
                                  "ID": "295",
                                  "Name": "7",
                                  "ParameterID": "607",
                                  "Value": "7"
                             },
                             {
                                  "ID": "296",
                                  "Name": "8",
                                  "ParameterID": "607",
                                  "Value": "8"
                             },
                             {
                                  "ID": "297",
                                  "Name": "9",
                                  "ParameterID": "607",
                                  "Value": "9"
                             },
                             {
                                  "ID": "298",
                                  "Name": "10",
                                  "ParameterID": "607",
                                  "Value": "10"
                             },
                             {
                                  "ID": "299",
                                  "Name": "11",
                                  "ParameterID": "607",
                                  "Value": "11"
                             },
                             {
                                  "ID": "300",
                                  "Name": "12",
                                  "ParameterID": "607",
                                  "Value": "12"
                             },
                             {
                                  "ID": "301",
                                  "Name": "13",
                                  "ParameterID": "607",
                                  "Value": "13"
                             },
                             {
                                  "ID": "302",
                                  "Name": "14",
                                  "ParameterID": "607",
                                  "Value": "14"
                             },
                             {
                                  "ID": "303",
                                  "Name": "15",
                                  "ParameterID": "607",
                                  "Value": "15"
                             },
                             {
                                  "ID": "304",
                                  "Name": "16",
                                  "ParameterID": "607",
                                  "Value": "16"
                             },
                             {
                                  "ID": "305",
                                  "Name": "17",
                                  "ParameterID": "607",
                                  "Value": "17"
                             },
                             {
                                  "ID": "306",
                                  "Name": "18",
                                  "ParameterID": "607",
                                  "Value": "18"
                             },
                             {
                                  "ID": "307",
                                  "Name": "19",
                                  "ParameterID": "607",
                                  "Value": "19"
                             },
                             {
                                  "ID": "308",
                                  "Name": "20",
                                  "ParameterID": "607",
                                  "Value": "20"
                             },
                             {
                                  "ID": "309",
                                  "Name": "21",
                                  "ParameterID": "607",
                                  "Value": "21"
                             },
                             {
                                  "ID": "310",
                                  "Name": "22",
                                  "ParameterID": "607",
                                  "Value": "22"
                             },
                             {
                                  "ID": "311",
                                  "Name": "23",
                                  "ParameterID": "607",
                                  "Value": "23"
                             },
                             {
                                  "ID": "312",
                                  "Name": "24",
                                  "ParameterID": "607",
                                  "Value": "24"
                             },
                             {
                                  "ID": "313",
                                  "Name": "25",
                                  "ParameterID": "607",
                                  "Value": "25"
                             },
                             {
                                  "ID": "314",
                                  "Name": "26",
                                  "ParameterID": "607",
                                  "Value": "26"
                             },
                             {
                                  "ID": "315",
                                  "Name": "27",
                                  "ParameterID": "607",
                                  "Value": "27"
                             },
                             {
                                  "ID": "316",
                                  "Name": "28",
                                  "ParameterID": "607",
                                  "Value": "28"
                             },
                             {
                                  "ID": "317",
                                  "Name": "29",
                                  "ParameterID": "607",
                                  "Value": "29"
                             },
                             {
                                  "ID": "318",
                                  "Name": "30",
                                  "ParameterID": "607",
                                  "Value": "30"
                             }
                        ]
                   },
                   "ServiceID": "1435",
                   "Tooltip": "დღეები",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ElCredit prolongation",
              "Details": "სესხის გადავადება",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1435.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1435",
              "ServiceType": "Standard"
         }
    },
    "1436": {
         "Parameters": {
              "Description": "სესხის ნომერი",
              "ID": "609",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1436",
              "Tooltip": "სესხის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Minicredit prolongation",
              "Details": "სესხის გადავადება",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1436.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1436",
              "ServiceType": "Standard"
         }
    },
    "1437": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "612",
                   "Mask": "^\\d{11}$",
                   "Name": "customercode",
                   "ServiceID": "1437",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "list",
                   "ID": "613",
                   "Mask": "^$|.*",
                   "Name": "select_list",
                   "ServiceID": "1437",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              },
              {
                   "Description": null,
                   "ID": "697",
                   "Mask": "^$|[\\s\\S]*",
                   "Name": "loanpaydate",
                   "ServiceID": "1437",
                   "Tooltip": null,
                   "Type": "HiddenEmptyField"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "EasyMoney სესხის დაფარვა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1437.png",
              "MaxAmount": "2000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1437",
              "ServiceType": "Standard"
         }
    },
    "1438": {
         "Parameters": {
              "Description": "ინვოისის ნომერი",
              "ID": "614",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1438",
              "Tooltip": "ინვოისის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "აიტი სერვისი",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet & Communications",
              "GroupID": "2",
              "ImgURL": "/img/services/regular/1438.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1438",
              "ServiceType": "Standard"
         }
    },
    "1439": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "E5A5FDD06F9B41BE979DC2DB689C3343",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "1440": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "616",
              "Mask": "^\\d{11}$",
              "Name": "customercode",
              "ServiceID": "1440",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "WinCredit სესხის დაფარვა",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1440.png",
              "MaxAmount": "1200",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1440",
              "ServiceType": "Standard"
         }
    },
    "1441": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "617",
                   "Mask": "^\\d{11}$",
                   "Name": "customercode",
                   "ServiceID": "1441",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დღეები",
                   "ID": "618",
                   "Mask": "^\\d+$",
                   "Name": "loanduration",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "328",
                                  "Name": "7",
                                  "ParameterID": "618",
                                  "Value": "7"
                             },
                             {
                                  "ID": "329",
                                  "Name": "15",
                                  "ParameterID": "618",
                                  "Value": "15"
                             },
                             {
                                  "ID": "330",
                                  "Name": "30",
                                  "ParameterID": "618",
                                  "Value": "30"
                             }
                        ]
                   },
                   "ServiceID": "1441",
                   "Tooltip": "დღეები",
                   "Type": "List"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "WinCredit დაგვიანების საფასურის გადახდა",
              "Details": "დაგვიანების საფასურის გადახდა",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1441.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1441",
              "ServiceType": "Standard"
         }
    },
    "1442": {
         "Parameters": [
              {
                   "Description": "მიმღების ანგარიში IBAN",
                   "ID": "619",
                   "Mask": "\\w+(BG|bg)\\w+",
                   "Name": "account",
                   "ServiceID": "1442",
                   "Tooltip": "მიმღების ანგარიშის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "მიმღების პირადი ნომერი",
                   "ID": "812",
                   "Mask": "^\\d+$",
                   "Name": "personalid",
                   "ServiceID": "1442",
                   "Tooltip": "მიმღების პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დანიშნულება",
                   "ID": "621",
                   "Mask": "[\\s\\S]*",
                   "Name": "description",
                   "ServiceID": "1442",
                   "Tooltip": "დანიშნულება",
                   "Type": "Text"
              },
              {
                   "Description": null,
                   "ID": "636",
                   "Mask": "[\\s\\S]*",
                   "Name": "onetimesend",
                   "ServiceID": "1442",
                   "Tooltip": null,
                   "Type": "HiddenEmptyField"
              },
              {
                   "Description": null,
                   "ID": "624",
                   "Mask": "[\\s\\S]*",
                   "Name": "additionalcode",
                   "ServiceID": "1442",
                   "Tooltip": null,
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "მიმღების დაბადების თარიღი",
                   "ID": "813",
                   "Mask": "[\\s\\S]*",
                   "Name": "birthdate",
                   "ServiceID": "1442",
                   "Tooltip": "მიმღების დაბადების თარიღი",
                   "Type": "Text"
              },
              {
                   "ID": "876",
                   "Mask": "(^$|[\\s\\S]*)",
                   "Name": "currency",
                   "ServiceID": "1442",
                   "Type": "HiddenEmptyField"
              },
              {
                   "Description": "მიმღების სრული სახელი",
                   "ID": "635",
                   "Mask": "[\\s\\S]*",
                   "Name": "fullname",
                   "ServiceID": "1442",
                   "Tooltip": "მიმღების სახელი გვარი",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "საქართველოს ბანკი",
              "Details": "თანხის გადარიცხვა შესაძლებელია მხოლოდ ფიზიკური პირისთვის.",
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1442.png",
              "MaxAmount": "300000",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1442",
              "ServiceType": "Standard"
         }
    },
    "1443": {
         "Parameters": [
              {
                   "Description": "ანგარიში",
                   "ID": "623",
                   "Mask": "[\\s\\S]*",
                   "Name": "account",
                   "ServiceID": "1443",
                   "Tooltip": "ანგარიში",
                   "Type": "Text"
              },
              {
                   "Description": "სრული სახელი",
                   "ID": "626",
                   "Mask": "[\\s\\S]*",
                   "Name": "fullname",
                   "ServiceID": "1443",
                   "Tooltip": "სახელი გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "აღწერა",
                   "ID": "620",
                   "Mask": "[\\s\\S]*",
                   "Name": "description",
                   "ServiceID": "1443",
                   "Tooltip": "აღწერა",
                   "Type": "Text"
              },
              {
                   "Description": null,
                   "ID": "625",
                   "Mask": "[\\s\\S]*",
                   "Name": "onetimesend",
                   "ServiceID": "1443",
                   "Tooltip": null,
                   "Type": "HiddenEmptyField"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Bank Republic რესპუბლიკა",
              "Details": "თანხის გადარიცხვა შესაძლებელია მხოლოდ ფიზიკური პირისთვის. </br> არასამუშაო საათებში გადარიცხული თანხა აისახება მომდევნო საბანკო სამუშაო დღეს.",
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1443.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1443",
              "ServiceType": "Standard"
         }
    },
    "1445": {
         "Parameters": {
              "Description": "აბონენტის კოდი",
              "ID": "634",
              "Mask": "^.{3,5}$",
              "Name": "customercode",
              "ServiceID": "1445",
              "Tooltip": "აბონენტის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "ფოსტალონ (postalon)",
              "Details": "www.postalon.com",
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1445.png",
              "MaxAmount": "5000",
              "MinAmount": "0.1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1445",
              "ServiceType": "Standard"
         }
    },
    "1450": {
         "Parameters": {
              "Description": "t",
              "ID": "640",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1450",
              "Tooltip": "t",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Batch Phone Checker",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1450.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1450",
              "ServiceType": "Multicheck"
         }
    },
    "1461": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "651",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1461",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "652",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1461",
                   "Tooltip": "დღე.თვე.წელი",
                   "Type": "DateField"
              },
              {
                   "Description": "IBAN",
                   "ID": "653",
                   "Mask": "^[A-Z]{2}.{10,30}$",
                   "Name": "iban",
                   "ServiceID": "1461",
                   "Tooltip": "საბანკო ანგარიშის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "სრული სახელი",
                   "ID": "688",
                   "Mask": "[\\s\\S]*",
                   "Name": "fullname",
                   "ServiceID": "1461",
                   "Tooltip": "სრული სახელი",
                   "Type": "OptionalTextField"
              },
              {
                   "Description": "დანიშნულება",
                   "ID": "689",
                   "Mask": "[\\s\\S]*",
                   "Name": "description",
                   "ServiceID": "1461",
                   "Tooltip": "დანიშნულება",
                   "Type": "OptionalTextField"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "United Bank Account Topup",
              "Details": "TBC<br>Bank of Georgia<br>Liberty Bank<br>ProCredit<br>Finca<br>Bank Republic<br>KSB<br>Cartu<br>VTB",
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1461.png",
              "MaxAmount": "50",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1461",
              "ServiceType": "Standard"
         }
    },
    "1463": {
         "Parameters": [
              {
                   "Description": "ბარათის ნომერი",
                   "ID": "656",
                   "Mask": "[\\s\\S]*",
                   "Name": "pan",
                   "ServiceID": "1463",
                   "Tooltip": "ბარათის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": null,
                   "ID": "888",
                   "Mask": "[\\s\\S]*",
                   "Name": "onetimesend",
                   "ServiceID": "1463",
                   "Tooltip": null,
                   "Type": "HiddenEmptyField"
              }
         ],
         "Properties": {
              "CommissionRate": "2.5",
              "Currency": null,
              "Description": "Card Topup",
              "Details": "VISA",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1463.png",
              "MaxAmount": "700",
              "MinAmount": "1",
              "MinCommission": "2",
              "Rounding": "0.01",
              "ServiceID": "1463",
              "ServiceType": "Standard"
         }
    },
    "1467": {
         "Parameters": [
              {
                   "Description": "ანგარიშის ნომერი",
                   "ID": "700",
                   "Mask": "\\w+(VT|vt)\\w+",
                   "Name": "iban",
                   "ServiceID": "1467",
                   "Tooltip": "ანგარიშის ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "დანიშნულება",
                   "ID": "701",
                   "Mask": "[\\s\\S]*",
                   "Name": "description",
                   "ServiceID": "1467",
                   "Tooltip": "დანიშნულება",
                   "Type": "Text"
              },
              {
                   "Description": "მიმღები",
                   "ID": "702",
                   "Mask": "[\\s\\S]*",
                   "Name": "receiver",
                   "ServiceID": "1467",
                   "Tooltip": "მიმღების სახელი და გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "პირადი ნომერი",
                   "ID": "703",
                   "Mask": "[\\s\\S]*",
                   "Name": "personalid",
                   "ServiceID": "1467",
                   "Tooltip": "მიმღების პირადი ნომერი",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "1",
              "Currency": null,
              "Description": "VTB",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1467.png",
              "MaxAmount": "1500",
              "MinAmount": "0.1",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1467",
              "ServiceType": "Standard"
         }
    },
    "1486": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "726",
                   "Mask": "[\\s\\S]*",
                   "Name": "account",
                   "ServiceID": "1486",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "list",
                   "ID": "727",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1486",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "mon.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1486.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1486",
              "ServiceType": "Standard"
         }
    },
    "1487": {
         "Parameters": [
              {
                   "Description": "გამგზავნის პირადი ნომერი",
                   "ID": "728",
                   "Mask": "^\\d{11}$",
                   "Name": "sender",
                   "ServiceID": "1487",
                   "Tooltip": "გამგზავნის პირადობა",
                   "Type": "Text"
              },
              {
                   "Description": "გამგზავნის ტელეფონი",
                   "ID": "729",
                   "Mask": "^\\d+$",
                   "Name": "senderphone",
                   "ServiceID": "1487",
                   "Tooltip": "995XXXXXXXXX",
                   "Type": "Text"
              },
              {
                   "Description": "გამგზავნის სრული სახელი",
                   "ID": "730",
                   "Mask": "[\\s\\S]*",
                   "Name": "senderfullname",
                   "ServiceID": "1487",
                   "Tooltip": "გამგზავნის სახელი",
                   "Type": "Text"
              },
              {
                   "Description": "მიმღების პირადი ნომერი",
                   "ID": "731",
                   "Mask": "^\\d{11}$",
                   "Name": "receiver",
                   "ServiceID": "1487",
                   "Tooltip": "მიმღების პირადობა",
                   "Type": "Text"
              },
              {
                   "Description": "მიმღების ტელეფონი",
                   "ID": "732",
                   "Mask": "^\\d+$",
                   "Name": "receiverphone",
                   "ServiceID": "1487",
                   "Tooltip": "995XXXXXXXXX",
                   "Type": "Text"
              },
              {
                   "Description": "მიმღების სახელი გვარი",
                   "ID": "733",
                   "Mask": "[\\s\\S]*",
                   "Name": "receiverfullname",
                   "ServiceID": "1487",
                   "Tooltip": "მიმღების სრული სახელი",
                   "Type": "Text"
              },
              {
                   "Description": "დამ. ინფორმაცია",
                   "ID": "734",
                   "Mask": "[\\s\\S]*",
                   "Name": "description",
                   "ServiceID": "1487",
                   "Tooltip": "ინფორმაცია",
                   "Type": "OptionalTextField"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "IntelExpress -ში განაღდება ნებისმიერ ანგარიშზე",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1487.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1487",
              "ServiceType": "Standard"
         }
    },
    "1502": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "334",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1502",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Babilon Mobile",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1502.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1502",
              "ServiceType": "Standard"
         }
    },
    "1507": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "322",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1507",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Katel",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1507.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1507",
              "ServiceType": "Standard"
         }
    },
    "1508": {
         "Parameters": {
              "Description": "მომხმარებლის კოდი",
              "ID": "29",
              "Mask": "^\\d+$",
              "Name": "customercode",
              "ServiceID": "1508",
              "Tooltip": "მომხმარებლის კოდი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Batumi cleaning service",
              "ExchangeRate": "0",
              "GroupDescription": "Utility Payments",
              "GroupID": "1",
              "ImgURL": "/img/services/regular/1508.png",
              "MaxAmount": "2000",
              "MinAmount": "0",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1508",
              "ServiceType": "Standard"
         }
    },
    "1509": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "308",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1509",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "PegasusAirlines",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/1509.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1509",
              "ServiceType": "Standard"
         }
    },
    "1510": {
         "Parameters": [
              {
                   "Description": "ანგარიში",
                   "ID": "657",
                   "Mask": "[\\s\\S]*",
                   "Name": "account",
                   "ServiceID": "1510",
                   "Tooltip": "ანგარიში",
                   "Type": "Text"
              },
              {
                   "Description": "სრული სახელი",
                   "ID": "661",
                   "Mask": "[\\s\\S]*",
                   "Name": "fullname",
                   "ServiceID": "1510",
                   "Tooltip": "სახელი გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "აღწერა",
                   "ID": "664",
                   "Mask": "[\\s\\S]*",
                   "Name": "description",
                   "ServiceID": "1510",
                   "Tooltip": "აღწერა",
                   "Type": "Text"
              },
              {
                   "Description": null,
                   "ID": "660",
                   "Mask": "[\\s\\S]*",
                   "Name": "onetimesend",
                   "ServiceID": "1510",
                   "Tooltip": null,
                   "Type": "HiddenEmptyField"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ტერა ბანკი",
              "Details": "თანხის გადარიცხვა შესაძლებელია მხოლოდ ფიზიკური პირისთვის. </br> არასამუშაო საათებში გადარიცხული თანხა აისახება მომდევნო საბანკო სამუშაო დღეს.",
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1510.png",
              "MaxAmount": "50000",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1510",
              "ServiceType": "Standard"
         }
    },
    "1511": {
         "Parameters": [
              {
                   "Description": "ანგარიში",
                   "ID": "658",
                   "Mask": "[\\s\\S]*",
                   "Name": "account",
                   "ServiceID": "1511",
                   "Tooltip": "ანგარიში",
                   "Type": "Text"
              },
              {
                   "Description": "სრული სახელი",
                   "ID": "662",
                   "Mask": "[\\s\\S]*",
                   "Name": "fullname",
                   "ServiceID": "1511",
                   "Tooltip": "სახელი გვარი",
                   "Type": "Text"
              },
              {
                   "Description": "აღწერა",
                   "ID": "663",
                   "Mask": "[\\s\\S]*",
                   "Name": "description",
                   "ServiceID": "1511",
                   "Tooltip": "აღწერა",
                   "Type": "Text"
              },
              {
                   "Description": null,
                   "ID": "659",
                   "Mask": "[\\s\\S]*",
                   "Name": "onetimesend",
                   "ServiceID": "1511",
                   "Tooltip": null,
                   "Type": "HiddenEmptyField"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "ქართუ ბანკი",
              "Details": "თანხის გადარიცხვა შესაძლებელია მხოლოდ ფიზიკური პირისთვის. </br> არასამუშაო საათებში გადარიცხული თანხა აისახება მომდევნო საბანკო სამუშაო დღეს.",
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1511.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "1",
              "Rounding": "0.01",
              "ServiceID": "1511",
              "ServiceType": "Standard"
         }
    },
    "1535": {
         "Parameters": [
              {
                   "Description": "პირადობის ნომერი",
                   "ID": "820",
                   "Mask": "^\\d{9,11}$",
                   "Name": "customercode",
                   "ServiceID": "1535",
                   "Tooltip": "პირადობა",
                   "Type": "Text"
              },
              {
                   "Description": "0",
                   "ID": "821",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1535",
                   "Tooltip": "0",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "New Credit",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1535.png",
              "MaxAmount": "1000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1535",
              "ServiceType": "Standard"
         }
    },
    "1536": {
         "Parameters": [
              {
                   "Description": "პირადობა",
                   "ID": "822",
                   "Mask": "[\\s\\S]*",
                   "Name": "customercode",
                   "ServiceID": "1536",
                   "Tooltip": "პირადობა",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "823",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1536",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              },
              {
                   "Description": "RepublicBankHelper",
                   "ID": "824",
                   "Mask": "[\\s\\S]*",
                   "Name": "plugintype",
                   "ServiceID": "1536",
                   "Tooltip": "0",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "list",
                   "ID": "825",
                   "Mask": "[\\s\\S]*",
                   "Name": "select_list",
                   "ServiceID": "1536",
                   "Tooltip": "list",
                   "Type": "HiddenFieldWithDefaultValue"
              },
              {
                   "Description": "ოპერაციის ტიპი",
                   "ID": "826",
                   "Mask": "^\\d$",
                   "Name": "productid",
                   "Parameters": {
                        "ParameterReference": [
                             {
                                  "ID": "396",
                                  "Name": "ანგარიშზე თანხის შეტანა",
                                  "ParameterID": "826",
                                  "Value": "1"
                             },
                             {
                                  "ID": "397",
                                  "Name": "სესხის დაფარვა",
                                  "ParameterID": "826",
                                  "Value": "2"
                             },
                             {
                                  "ID": "398",
                                  "Name": "საკრედიტო ბარათზე თანხის შეტანა",
                                  "ParameterID": "826",
                                  "Value": "3"
                             }
                        ]
                   },
                   "ServiceID": "1536",
                   "Tooltip": "ოპერაციის ტიპი",
                   "Type": "List"
              },
              {
                   "Description": "80.179",
                   "ID": "827",
                   "Mask": "[\\s\\S]*",
                   "Name": "terminal",
                   "ServiceID": "1536",
                   "Tooltip": "80.179",
                   "Type": "HiddenFieldWithDefaultValue"
              }
         ],
         "Properties": {
              "CommissionRate": "2",
              "Currency": null,
              "Description": "Bank Republic automatic",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Bank Transfers",
              "GroupID": "18",
              "ImgURL": "/img/services/regular/1536.png",
              "MaxAmount": "1000",
              "MinAmount": "0.5",
              "MinCommission": "0.5",
              "Rounding": "0.01",
              "ServiceID": "1536",
              "ServiceType": "Standard"
         }
    },
    "1540": {
         "Parameters": {
              "Description": "პირადი ნომერი",
              "ID": "833",
              "Mask": "^\\d{11}$",
              "Name": "personalid",
              "ServiceID": "1540",
              "Tooltip": "პირადი ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "eLoan Schedule Repayment",
              "Details": "eLoan სესხის გრაფიკით დაფარვა",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1540.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1540",
              "ServiceType": "Standard"
         }
    },
    "1558": {
         "Parameters": {
              "Description": "ანგარიში",
              "ID": "862",
              "Mask": "^[\\s\\S]{3,30}$",
              "Name": "customercode",
              "ServiceID": "1558",
              "Tooltip": "ანგარიში",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Steam Xsolla",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Online Games & Fun",
              "GroupID": "12",
              "ImgURL": "/img/services/regular/1558.png",
              "MaxAmount": "1500",
              "MinAmount": "0.25",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1558",
              "ServiceType": "Standard"
         }
    },
    "1565": {
         "Parameters": [
              {
                   "Description": "პირადობის ბოლო 6 ციფრი",
                   "ID": "869",
                   "Mask": "^\\d{6}$",
                   "Name": "customercode",
                   "ServiceID": "1565",
                   "Tooltip": "XXXXXX",
                   "Type": "Text"
              },
              {
                   "Description": "მიბულურის ნომერი",
                   "ID": "872",
                   "Mask": "^\\d{9,12}$",
                   "Name": "mobilenumber",
                   "ServiceID": "1565",
                   "Tooltip": "XXXXXXXXX",
                   "Type": "Text"
              },
              {
                   "Description": "დაბადების თარიღი",
                   "ID": "871",
                   "Mask": "^(0[1-9]|[12][0-9]|3[01])([.])(0[1-9]|1[012])([.])([1-9][0-9]{3})$",
                   "Name": "birthdate",
                   "ServiceID": "1565",
                   "Tooltip": "დაბადების თარიღი",
                   "Type": "DateField"
              },
              {
                   "Description": "list",
                   "ID": "870",
                   "Mask": "^[\\s\\S]{0,50}$",
                   "Name": "select_list",
                   "ServiceID": "1565",
                   "Tooltip": "list",
                   "Type": "TwoStepSingleselect"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "EasyCredit Liberty Bank",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1565.png",
              "MaxAmount": "1500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1565",
              "ServiceType": "Standard"
         }
    },
    "1601": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "331",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1601",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Kcell",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1601.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1601",
              "ServiceType": "Standard"
         }
    },
    "1700": {
         "Parameters": {
              "Description": "Nickname",
              "ID": "129",
              "Mask": "[\\s\\S]*",
              "Name": "nickname",
              "ServiceID": "1700",
              "Tooltip": "Nickname",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Smartivi",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1600.png",
              "MaxAmount": "2000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1700",
              "ServiceType": "Standard"
         }
    },
    "1701": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "337",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "1701",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "CDMA ITC",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1701.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1701",
              "ServiceType": "Standard"
         }
    },
    "1704": {
         "Parameters": [
              {
                   "Description": "პირადი ნომერი",
                   "ID": "130",
                   "Mask": "[\\s\\S]*",
                   "Name": "personalid",
                   "ServiceID": "1704",
                   "Tooltip": "პირადი ნომერი",
                   "Type": "Text"
              },
              {
                   "Description": "Nickname",
                   "ID": "131",
                   "Mask": "[\\s\\S]*",
                   "Name": "nickname",
                   "ServiceID": "1704",
                   "Tooltip": "Nickname",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Smartivi and PersonalID",
              "ExchangeRate": "0",
              "GroupDescription": "Financial Services",
              "GroupID": "8",
              "ImgURL": "/img/services/regular/1600.png",
              "MaxAmount": "2000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "1704",
              "ServiceType": "Standard"
         }
    },
    "1705": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "721",
              "Mask": "^(995|\\+995|)\\d{9}$",
              "Name": "account",
              "ServiceID": "1705",
              "Tooltip": "5XXXXXXXX ნებისმიერი ოპერატორის",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "United Mobile Services Topup",
              "Details": "მაგთი <br> ჯეოსელი <br> ბილაინი  <br>ბალი  <br>ბანი",
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/1705.png",
              "MaxAmount": "100",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "1",
              "ServiceID": "1705",
              "ServiceType": "Standard"
         }
    },
    "4002": {
         "Parameters": {
              "Description": "Domain name",
              "ID": "128",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "4002",
              "Tooltip": "Domain name",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Myhosting.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Hosting & Domain Registration",
              "GroupID": "11",
              "ImgURL": "/img/services/regular/4002.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4002",
              "ServiceType": "Standard"
         }
    },
    "4003": {
         "Parameters": [
              {
                   "Description": "მომხმარებლის სახელი",
                   "ID": "195",
                   "Mask": "[\\s\\S]*",
                   "Name": "INV",
                   "ServiceID": "4003",
                   "Tooltip": "მომხმარებლის სახელი",
                   "Type": "Text"
              },
              {
                   "Description": "Email",
                   "ID": "461",
                   "Mask": "[\\s\\S]*",
                   "Name": "email",
                   "ServiceID": "4003",
                   "Tooltip": "Email",
                   "Type": "Text"
              }
         ],
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "New.saqme.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Digital Content",
              "GroupID": "9",
              "ImgURL": "/img/services/regular/4003.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4003",
              "ServiceType": "Standard"
         }
    },
    "4004": {
         "Parameters": {
              "Description": "მომხმარებლის სახელი",
              "ID": "194",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "4004",
              "Tooltip": "მომხმარებლის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Adspay.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Digital Content",
              "GroupID": "9",
              "ImgURL": "/img/services/regular/4004.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4004",
              "ServiceType": "Standard"
         }
    },
    "4005": {
         "Parameters": {
              "Description": "მომხმარებელის სახელი",
              "ID": "125",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "4005",
              "Tooltip": "მომხმარებელის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Mycar.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Auto",
              "GroupID": "15",
              "ImgURL": "/img/services/regular/4005.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4005",
              "ServiceType": "Standard"
         }
    },
    "4006": {
         "Parameters": {
              "Description": "მომხმარებელის სახელი",
              "ID": "126",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "4006",
              "Tooltip": "მომხმარებელის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Myauto.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Auto",
              "GroupID": "15",
              "ImgURL": "/img/services/regular/4006.png",
              "MaxAmount": "1000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4006",
              "ServiceType": "Standard"
         }
    },
    "4007": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "183",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "4007",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "auto.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Auto",
              "GroupID": "15",
              "ImgURL": "/img/services/regular/4007.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4007",
              "ServiceType": "Standard"
         }
    },
    "4008": {
         "Parameters": {
              "Description": "ბოქსის ნომერი",
              "ID": "193",
              "Mask": "[\\s\\S]*",
              "Name": "accountnumber",
              "ServiceID": "4008",
              "Tooltip": "ბოქსის ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "get.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Transport & Logistics",
              "GroupID": "10",
              "ImgURL": "/img/services/regular/4008.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4008",
              "ServiceType": "Standard"
         }
    },
    "4009": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "335",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "4009",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Megacom Kirgizia",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/4009.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4009",
              "ServiceType": "Standard"
         }
    },
    "4010": {
         "Parameters": {
              "Description": "მომხმარებელის სახელი",
              "ID": "94",
              "Mask": "^\\d+$",
              "Name": "username",
              "ServiceID": "4010",
              "Tooltip": "მომხმარებელის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Maximum",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/4010.png",
              "MaxAmount": "500",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4010",
              "ServiceType": "Standard"
         }
    },
    "4011": {
         "Parameters": {
              "Description": "მომხმარებელის ID",
              "ID": "95",
              "Mask": "^\\d{1,11}$",
              "Name": "customercode",
              "ServiceID": "4011",
              "Tooltip": "მომხმარებელის ID",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Tbilisibet",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/4011.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4011",
              "ServiceType": "Standard"
         }
    },
    "4012": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "329",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "4012",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "MLT Tajikistan",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/4012.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4012",
              "ServiceType": "Standard"
         }
    },
    "4015": {
         "Parameters": {
              "Description": "PIN",
              "ID": "122",
              "Mask": "^\\d{1,20}$",
              "Name": "accountnumber",
              "ServiceID": "4015",
              "Tooltip": "PIN",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "crystalbet.com",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/4015.png",
              "MaxAmount": "1000",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4015",
              "ServiceType": "Standard"
         }
    },
    "4016": {
         "Parameters": {
              "Description": "PIN",
              "ID": "123",
              "Mask": "^\\d+$",
              "Name": "accountnumber",
              "ServiceID": "4016",
              "Tooltip": "PIN",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "europe-bet.com",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/4016.png",
              "MaxAmount": "1450",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4016",
              "ServiceType": "Standard"
         }
    },
    "4017": {
         "Parameters": {
              "Description": "PIN",
              "ID": "138",
              "Mask": "^\\d{5,10}$",
              "Name": "accountnumber",
              "ServiceID": "4017",
              "Tooltip": "PIN",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Geogrand",
              "ExchangeRate": "0",
              "GroupDescription": "Gambling & Sports Betting",
              "GroupID": "7",
              "ImgURL": "/img/services/regular/4017.png",
              "MaxAmount": "1000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4017",
              "ServiceType": "Standard"
         }
    },
    "4019": {
         "Parameters": {
              "Description": "მომხმარებელის სახელი",
              "ID": "127",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "4019",
              "Tooltip": "მომხმარებელის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Mymarket.ge",
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/4019.png",
              "MaxAmount": "1000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "4019",
              "ServiceType": "Standard"
         }
    },
    "50000": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "FFACE969D15246FD9620D13B77EDB889",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50001": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "6F0A4D73ABF849F0A04E2289443B4CCF",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50002": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "4AC9560BCD86494C990923330241A3F4",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50003": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "972206245E274075BE00C111DFDAC800",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50004": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "A4929A47F5C8447A8E5B7C71A95C43B0",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50005": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "0DA347E1B3084074B2796CA081E5BAE0",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50006": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "7C972DDDD5754CF4A700F4396AF8FE0B",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50007": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "1437456B07094D9D8E47A18BE2208475",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50008": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "B132FD4DEEE84843B088B0C7F5C5513F",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50009": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "43F09BCDA81649AE8E7151E03997EC75",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50010": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "E2BBDFCFBE514901ABCDD9E456293F12",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50011": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "AA4BD5534DD2495E97B98FAD48B1A02C",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50012": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "D0610C6101384D85AD8AF80FAE19A137",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50013": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "D3A3DFDE3A7147AE9B0089898A280F69",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50014": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "655FE420CFBD41E38E955971EFED7930",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50015": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "60F22EB601F44D39B05A5ECBCF01DD25",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50016": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "7F1EBC72E7434718AA60C74EFCF0147B",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50017": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "D065EE3EBA954ADEA60837FEC38F121F",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50018": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "D7B6575AD60247A7A4F75CB44A3D5268",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50019": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "AD6BFE81D0F444C9802184EBA9D50BCA",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50020": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "9D75AA9E16654D2689320E0855F7C13E",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50021": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "CE6CD12224584AB689FC23F6596EF32C",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50022": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "9289E376732B40F99FD9513608B75DAA",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50023": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "4D774350875D4C8AB6A70A73D58006BC",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50024": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "A28D9AE81F38460E864FB2D55CE0209F",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50025": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "E59D772B525B4004B84628BE4A3A3B12",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50026": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "A2CA3935E2734D90894B5CA9689BF1EE",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50027": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "5077FAE1B25F44F59C2A2DD31DF6D0FF",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50028": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "BE3A6849CE0C48DD8944CB0C2E6E83D6",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50029": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "529F197BE41248E798C2803C70C33112",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50030": {
         "Parameters": {
              "Description": "ნომერი",
              "ID": "338",
              "Mask": "[\\s\\S]*",
              "Name": "customercode",
              "ServiceID": "50030",
              "Tooltip": "ნომერი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Okarte",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Mobile Operators",
              "GroupID": "3",
              "ImgURL": "/img/services/regular/50030.png",
              "MaxAmount": "500",
              "MinAmount": "1",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "50030",
              "ServiceType": "Standard"
         }
    },
    "50031": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "11C1565168BA42658911829638C3FF04",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50032": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "22191203396941F387CAB84B03A279F1",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50033": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "A37799FCD6504E3D8D74AB9ADB191716",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50034": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "E83D30269D1046A0B9774AD14C8F346A",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50035": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "DEE1B7CA00BE4F2CA583F435A69F6D20",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50036": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "9F2B47879F6542EAA40B99336F1C0791",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50037": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "0838439FAA6C4503984C98C586910A50",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50038": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "520D5C18DF9846F9A60E09CE6E2C556A",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50039": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "9F425BDE4B364037A0DE0C711479270B",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50040": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "E1F4AB3AEC3E48AFA86C84DE10E5F48B",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50041": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "6FAA69F9068143A898C8F3DC447A1411",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50043": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "223832D8A481485190ADDFCB5D711850",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50044": {
         "Parameters": {
              "Description": "მომხმარებელის სახელი",
              "ID": "134",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "50044",
              "Tooltip": "მომხმარებელის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Myparts.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Auto",
              "GroupID": "15",
              "ImgURL": "/img/services/regular/50044.png",
              "MaxAmount": "1000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "50044",
              "ServiceType": "Standard"
         }
    },
    "50045": {
         "Parameters": {
              "Description": "მომხმარებელის სახელი",
              "ID": "133",
              "Mask": "[\\s\\S]*",
              "Name": "INV",
              "ServiceID": "50045",
              "Tooltip": "მომხმარებელის სახელი",
              "Type": "Text"
         },
         "Properties": {
              "CommissionRate": "0",
              "Currency": null,
              "Description": "Myhome.ge",
              "Details": null,
              "ExchangeRate": "0",
              "GroupDescription": "Internet Services & Products",
              "GroupID": "5",
              "ImgURL": "/img/services/regular/50045.png",
              "MaxAmount": "1000",
              "MinAmount": "0.01",
              "MinCommission": "0",
              "Rounding": "0.01",
              "ServiceID": "50045",
              "ServiceType": "Standard"
         }
    },
    "50046": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "C67D778C4CE24C19A214DCCE97F0F2A3",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50047": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "AA10469A9BFD427EA59AAFA689EC148E",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50048": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "5D96516F46034206A78E1D4432ABC4EB",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50049": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "9F6A486792EE481BAB2D9E49264E859C",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50050": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "932E8F523F7F405980E5B45F3E0BCCB2",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50051": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "A3B7301DE255459F8748F78CC0E25ED1",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50052": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "DD42B61FCEC447DA86CD49A9F3828A14",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50053": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "AD4F2A8F54714789AA3218CC9781FE03",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50054": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "8AC21E84454040ECB43C9A241C37651A",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50055": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "206FAEC58B5A4CC18A1864A3951BE093",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50056": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "246F612D3AC5463C8A00AEE88AD88026",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50057": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "1EA984B6BCA84201BD234E491896F473",
              "SystemCode": "OK",
              "Value": null
         }
    },
    "50058": {
         "GetServicePropertiesResult": {
              "Code": "0",
              "ID": "F777B84897D74459BAE87CCA95CB6F0E",
              "SystemCode": "OK",
              "Value": null
         }
    }
}`

const ServiceParameters = JSON.parse(json)

module.exports = ServiceParameters