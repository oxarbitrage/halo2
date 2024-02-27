window.BENCHMARK_DATA = {
  "lastUpdate": 1708994306200,
  "repoUrl": "https://github.com/zcash/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "daira@jacaranda.org",
            "name": "Daira-Emma Hopwood",
            "username": "daira"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7df93fd855395dcdb301a857d4b33f37903bbf76",
          "message": "Merge pull request #814 from adria0/fix/mdbook\n\nFix MD book generation",
          "timestamp": "2024-02-26T23:50:17Z",
          "tree_id": "ef67992c62cbe95d9ecf5d0fada00c9835333a5b",
          "url": "https://github.com/zcash/halo2/commit/7df93fd855395dcdb301a857d4b33f37903bbf76"
        },
        "date": 1708994300990,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 71672766,
            "range": "± 5797578",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 4063888,
            "range": "± 56115",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 136042062,
            "range": "± 2919441",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4609210,
            "range": "± 154712",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 187547850,
            "range": "± 1100421",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 5033443,
            "range": "± 100876",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 31228,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 133293,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 146463,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 232196,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 232363,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 136061,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 149290,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 234880,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 235069,
            "range": "± 907",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 284744,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 298350,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 383589,
            "range": "± 1528",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 383560,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 2892533,
            "range": "± 14944",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 4691817,
            "range": "± 27578",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 8127576,
            "range": "± 80071",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 18492745,
            "range": "± 244348",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 32281226,
            "range": "± 44652",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 62301891,
            "range": "± 108958",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 8761,
            "range": "± 2128",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8429,
            "range": "± 1274",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 14145,
            "range": "± 993",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 18396,
            "range": "± 1362",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 26835,
            "range": "± 1316",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 44484,
            "range": "± 2258",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 91253,
            "range": "± 1568",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 162906,
            "range": "± 1820",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 296817,
            "range": "± 3658",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 577470,
            "range": "± 10183",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1154750,
            "range": "± 20912",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 2385698,
            "range": "± 44748",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 5048670,
            "range": "± 169072",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 10920752,
            "range": "± 151924",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 22998723,
            "range": "± 347200",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 54117307,
            "range": "± 1193842",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 29200,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 29301,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 130190318,
            "range": "± 3179730",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 268863406,
            "range": "± 6269136",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 586482216,
            "range": "± 17261695",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1233152223,
            "range": "± 31935882",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 2577197051,
            "range": "± 58126526",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 5455174441,
            "range": "± 126163343",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 11611496728,
            "range": "± 219230400",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 24132876358,
            "range": "± 484489667",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 50543795891,
            "range": "± 1078173075",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 84856217,
            "range": "± 622874",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 139818098,
            "range": "± 1043650",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 237754952,
            "range": "± 1381059",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 420325727,
            "range": "± 7762614",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 761101094,
            "range": "± 3759679",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1415358473,
            "range": "± 4352126",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 2667055509,
            "range": "± 6199187",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 5061309687,
            "range": "± 25088881",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 9781532497,
            "range": "± 23366617",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 4564046,
            "range": "± 136953",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 6651696,
            "range": "± 257929",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 10643673,
            "range": "± 334091",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 17439924,
            "range": "± 514831",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 30006298,
            "range": "± 362072",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 51765311,
            "range": "± 535794",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 92563733,
            "range": "± 843845",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 166515530,
            "range": "± 1066634",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 309772286,
            "range": "± 6945622",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}