export const pricing = [
    { 
        "index": 0,
        "title": "Easy Screen Fees",
        "body": "The Easy Screen Fees are presented in the table below:",
        "header": "Easy Trading Screen Fees",
        "table": [
            {
                "Type": "Card Purchase",
                "Applicable Fee": "3.5% (1$ minimum charge)*"
            },
            {
                "Type": "Crypto Conversion",
                "Applicable Fee": "1.5% (1$ minimum charge)"
            },
            {
                "Type": "Crypto Conversion using BTK",
                "Applicable Fee": "0.75% (1$ minimum charge)**"
            },
        ],
        "footer": `<p>*Please note that your bank may also charge a commission to execute such purchase.</p>
                    <p>**Users have the option to reduce the fees by enabling "50% fees discounted using BTK Switch in the Pro Screen. If enabled, reduction will apply. If the user has not got enough BTK, the system will automatically buy BTK in secondary market to reach the holding requirements.</p>`
        },
      { 
        "index": 1,
        "title": "Pro Screen Fees",
        "body": "Pro Screen Fees vary according to the type of users which depends on the user’s BTK balance and BTC volume generated, presented in the tables below:",
        "headers": [
            {
                "header": "Normal Users Table:"
            },
            {
                "header": "VIP Users Table:"
            }
        ],
        "table1": [
            {
                "Tier": "Nor.0",
                "BTK Balance": "BTK < 200,000",
                "Maker": "0.20%",
                "Maker (Using BTK)": "0.10%",
                "Taker": "0.25%",
                "Taker (Using BTK)": "0.13%",
                "AVG": "0.17%"
            },
            {
                "Tier": "Nor.1",
                "BTK Balance": "200,000 < BTK < 2,000,000",
                "Maker": "0.20%",
                "Maker (Using BTK)": "0.10%",
                "Taker": "0.25%",
                "Taker (Using BTK)": "0.11%",
                "AVG": "0.16%"
            },
            {
                "Tier": "Nor.2",
                "BTK Balance": "2,000,000 < BTK < 10,000,000",
                "Maker": "0.15%",
                "Maker (Using BTK)": "0.08%",
                "Taker": "0.18%",
                "Taker (Using BTK)": "0.09%",
                "AVG": "0.12%"
            },
            {
                "Tier": "Nor.3",
                "BTK Balance": "10,000,000 < BTK < 50,000,000",
                "Maker": "0.10%",
                "Maker (Using BTK)": "0.05%",
                "Taker": "0.15%",
                "Taker (Using BTK)": "0.08%",
                "AVG": "0.09%"
            },
            {
                "Tier": "Nor.4",
                "BTK Balance": "50,000,000 < BTK < 100,000,000",
                "Maker": "0%",
                "Maker (Using BTK)": "0%",
                "Taker": "0.12%",
                "Taker (Using BTK)": "0.06%",
                "AVG": "0.05%"
            },
            {
                "Tier": "Nor.5",
                "BTK Balance": "100,000,000 < BTK",
                "Maker": "0%",
                "Maker (Using BTK)": "0%",
                "Taker": "0.08%",
                "Taker (Using BTK)": "0.04%",
                "AVG": "0.03%"
            },
            {
                "Tier": "AVG",
                "BTK Balance": "",
                "Maker": "0.11%",
                "Maker (Using BTK)": "0.05%",
                "Taker": "0.17%",
                "Taker (Using BTK)": "0.08%",
                "AVG": "0.10%"
            },
        ],
        "table2": [
            {
                "Tier": "VIP.0",
                "BTK Balance": "BTK < 200,000",
                "BTC Volume (30 Days Trade Volume)": "< 20 K USD",
                "Maker": "0.15%",
                "Maker (Using BTK)": "0.08%",
                "Taker": "0.20%",
                "Taker (Using BTK)": "0.10%",
                "AVG": "0.13%"
            },
            {
                "Tier": "VIP.1",
                "BTK Balance": "200,000 < BTK < 2,000,000",
                "BTC Volume (30 Days Trade Volume)": "< 1 M USD",
                "Maker": "0.08%",
                "Maker (Using BTK)": "0.04%",
                "Taker": "0.18%",
                "Taker (Using BTK)": "0.09%",
                "AVG": "0.10%"
            },
            {
                "Tier": "VIP.2",
                "BTK Balance": "2,000,000 < BTK < 10,000,000",
                "BTC Volume (30 Days Trade Volume)": "< 2.5 M USD",
                "Maker": "0.05%",
                "Maker (Using BTK)": "0.03%",
                "Taker": "0.14%",
                "Taker (Using BTK)": "0.07%",
                "AVG": "0.07%"
            },
            {
                "Tier": "VIP.3",
                "BTK Balance": "10,000,000 < BTK < 50,000,000",
                "BTC Volume (30 Days Trade Volume)": "< 5 M USD",
                "Maker": "0.02%",
                "Maker (Using BTK)": "0.01%",
                "Taker": "0.12%",
                "Taker (Using BTK)": "0.06%",
                "AVG": "0.05%"
            },
            {
                "Tier": "VIP.4",
                "BTK Balance": "50,000,000 < BTK < 100,000,000",
                "BTC Volume (30 Days Trade Volume)": "< 10 M USD",
                "Maker": "0%",
                "Maker (Using BTK)": "0%",
                "Taker": "0.10%",
                "Taker (Using BTK)": "0.05%",
                "AVG": "0.04%"
            },
            {
                "Tier": "VIP.5",
                "BTK Balance": "100,000,000 < BTK",
                "BTC Volume (30 Days Trade Volume)": "< 20 M USD",
                "Maker": "0%",
                "Maker (Using BTK)": "0%",
                "Taker": "0.06%",
                "Taker (Using BTK)": "0.03%",
                "AVG": "0.02%"
            },
            {
                "Tier": "AVG",
                "BTK Balance": "",
                "BTC Volume (30 Days Trade Volume)": "",
                "Maker": "0.05%",
                "Maker (Using BTK)": "0.03%",
                "Taker": "0.13%",
                "Taker (Using BTK)": "0.07%",
                "AVG": "0.07%"
            },
        ],
        "footer": "Please note that the minimum applicable fee will be $0.50 for Normal Users. Moreover, if the user has not enough BTK to reach Tier Nor.1 and has enabled the “50% fees discounted using BTK” switch, then the system will automatically buy BTK through the secondary market to reach Nor.1 BTK holding requirements. Please note that VIP Users are exempt of paying fees."
      },
      { 
        "index": 2,
        "title": "Deposit & Withdrawal Fees",
        "body": "Please see the following table regarding the applicable fees when depositing and withdrawing funds from BitKings Exchange.",
        "header": "Deposit & Withdrawal Fees",
        "table": [
            {
                "Type": "Deposit",
                "Fiat": "Free",
                "Crypto": "Free"
            },
            {
                "Type": "Withdrawal",
                "Fiat": "(1€-100€)*",
                "Crypto": `<p>BTC: 0.0005 BTC – Min. Withdrawal 0.001 BTC</p>
                <p>BTK: 3.000 BTK – Min. Withdrawal 6.000 BTK</p>
                <p>XRP: 0.25 XRP – Min. Withdrawal 0.50 XRP</p>
                <p>ETH: 0.01 ETH – Min. Withdrawal 0.02 ETH</p>
                <p>LTC: 0.001 LTC – Min. Withdrawal 0.002 LTC</p>
                <p>USDT: 1 USDT – Min. Withdrawal 2 USDT</p>
                `
            },
        ],
      },
]

export const description = {
        'text' : 'Get to know the applicable fees on every trading screen and how they may vary according to the volume traded and the applicable reduction using BitKings (BTK) Token. '
}