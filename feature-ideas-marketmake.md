Design statement:
How would we solve the crude oil theft by single owner 18 wheeler truck drivers by reconciling Bill of Lading between (mid-stream suppliers) to end-stream refiners from Midland, Texas to Houston, Texas, so that (mid-stream suppliers reduce their losses).

Goal is avoid scope creep.

user: mid-stream supplier

How might we improve _(problem in the domain)______ for _(user)___ , so that _(user-focused outcome)______?

Line up incentives:

Core Ideas:
- Reduce the moral hazard of the truckers using the honor system to steal oil
  - Before: trucker user honor system, losses are higher
  - After: its all documented, reduced scope to cheat, less losses
- use system to track fraud by reconcilining BOL/reports faster 
  - (incentives for Midstream)
  - Able the ability to pinpoint issues in closer real time.
  - Faster we can track down bad batch, faster we can stop losses
    - save time, save money, with more info.
  -  Mid stream:
    - Tracking system to see:
      -  driver performance
      -  BOL status
      -  container status
         -  bad batch is coming from somewhere
            -  its either container,
            -  the driver,
            -  or the upstream supplier with bad.
  - Driver: incentivize drivers to use system
    - Get paid fast
    - Low fees
    - Interest
    - Borrow if unexpected expenses
  - End Stream: refinery people
    - same incentive as mid-supplier
    - They want to get the full amount of oil
      - More materials > more product > more money
      - Need all the oil to get all the money
      - Enabled by better, faster, reliable documentation sources

**Question:**
How do mid-stream suppliers user our service?
How do we make MONEY?
How to capture?

How much money does midstream supplier make?
Driver gets about $115/hr

**Value capture:**
  Figure out mid stream supplier -> end stream supplier economics
  Little tx over time
  Take Deposit fee percentage per Trip of something: 1%
  1% of cost of the barrels.

**Our BackLog**
**Esstentials:**
Back end (ETH):
1. Set up Matic:
   1. Reduce gas fees to make this viable
2. Set up Biconomy (free gas via relay station) - reason no gas fees for users
   1. Mid stream pays gas fees up front.
      1. Who pays?
      2. Off interest that is accured
   2. trucker don't pay gas feees to incentivize use.
3. Crypto to Fiat integration
   1. Reason: trucker want to get paid in cash - USD
4. Research crypto to fiat providers
   1. Moonpay
   2. Sendwyre
   3. CarbonMoney
   4. Transak
   5. Check out Celo.
      1. Pro: Also mobile
5. PWA
   1. Avoid making a mobile app
   2. Works offline and stores data
   3. Figure out how to do it.
6. Wallet integration:
   1. There is this thing that lets you choose wallets
      1. Use that
      2. Support Portis, MetaMask Mobile
         1. Stretch goal: others Fortmatic, others.
7. ENS
   1. Reason: Makes it easy to send to transfer/interact for everyone
   2. Sub ticket:
      1. research how many we need for contracts
         1. Anthony can pay for it
         2. Make sure ens domain is more than 4 characters - ~$5
8. UX/UI - address
      1. Names shown not account - gets around having to setup ENS for driver
      2. When clicks, show account
      3. when clicked, copies account address
9. UX/UI - intersts models
   1. Red button on factor. Last case scenerio
   2. Green button on deposit for 90 days
10. Driver NFT
    1. User OpenZeppelin ERC-721 contract
    2. Use OpenZeppelin's ERC-721 contract
    3. Don't roll out your own contract
    4. Don't copy and paste ERC-721 contract
         1. Install via NPM and use via import in Solidit
   3. SPEC:
      1. Array of BOLs NFTs contracts address
      2. Timeliness (speed of delivery) 
         1. (only operate so many hours in the day)
      3. Employer
         1. Length of employment
      4. Inspections
         1. Level (1,2,3) inspections (DOT inspection)
   4. Weighted Average Delta between oil onloaded and offloaded (Theft tracking) for truck
   5. Location Data (?)
      1. Location data to track where the oil is en route and see where oil is getting stolen(?)
   6. Linked with ratio to see where stealing is happening (?)
11. UX/UI - BOL
    1. Whats left in BOL?
12. create factory contract for BOL NFTs
    1. Design pattern:
       1. Factory contract creates BOLs
       2. Each BOL is an NFT
       3. Re: factory: Ask @Chan-Ho, @EthAmal, @EthanWessel, google online
13. Create BOL NFT - (Edward Amor)
    1. Reason: BOL used to reconcile issues
    2. Sub issue: research ERC-998
       1. If not, use ERC-721
          1. Create BOL and dBOL at the same time
             1. Have dBOL earn interest for driver
             2. dBOL is driver's work into BOL they own
    3. Use Aavagacchi's ERC-998 contract
       1. GIVE WARNING IN PROJECT.
       2. OpenZeppelin doesn't have it yet
       3. If you can find it online: add it via npm with it.
          1. Don't roll out your own contract
          2. Don't copy and paste ERC-998 contract
          3. Install via NPM and use via import in Solidity
          4. Reason: Time and security
       4. Exception:
          1. Trade off: complexity with two 721 contracts vs one 998 contract
          2. We can copy aavagachi's ERC-998 contract.
    4. Composible NFTS - ERC-998
       1. ERC-998 - NFTs that own other NFTs
          1. We crack open the BOL
          2. Give root dBOL to driver
          3. Give shell BOL to offloading specialist at end Stream
       2. dBOL spec
          1. How much they will get paid
          2. Link to BOL
          3. Funds:
             1. USDC, DAI, USDT
    5. Security
       1. Look more into Ownable.sol if it applies
    6. SPEC:
        1. Struct:
            1. Time
            2. Date
            3. Location of where Oil was taken
            4. Name of driver (when superivisor meets them)
            5. Truck number
            6. Trailer number
            7. Place where you are transporting oil to
            8. Customer name
            9. Reciving party
            10. Market worth of Crud Oil
            11. Number of barrels taken
            12. link to dBOL
            13. Tag with Serial number of Oil Container
                1. Truck Company name taking oil (generated before meeting driver)
                2. Specific amount of oil to take
                3. NOTE: Each tag goes to specific BOL
                4. NOTE: Serial number is in a computer, generated before meeting driver.
                5. NOTE: Serial number is UNIQUE id- KEY for database(?)
14. How to create dBOL?
    1. dBOL will earn money on the way to end delivery
        1. earn interst while you do the work
        2. dBOl is what gets collatoralized?
     1. factory function for dBOL
        1. Take BOL looks at struct properties
           1. Spits out dBOL
15. State transition of BOL for UX/UI
    1. **Reason:** track BOL to prevent theft
    2. **Reason:** focus on supplier.
    3. BOL flow
        1. State 0 (generation of Serial Number for BOL):
           1. Supervisor creates Serial Number
           2. Unique BOL has unique Serial Number
              1. Thats how we track it.
              2. Our serial number is our KEY for "database"
              3. Each Serial number is unique to each for Tank Faucetper job.
           3. Supervisor tells company to get oil X days before.
        2. State 1 (Creation of BOL):
           1. Company will tell driver to pick up oil
           2. Add tag number to BOL
        3. State 2 (Driving)
           1. Update state by driver
              1. Flat tire, inspection, breaks by state law, any issues
        4. State 3 (End of Delivery)
           1. Similar to State 0
           2. Driver meets Offloading specialist
              1. Transition of custody:
                 1. Both update state
                    1. Add info to BOL:
                       1. Time of delivery
                       2. Date of delivery
                       3. Driver signs
                       4. Offloading specialist signs
                          1. Offloading specilist ONLY signs when everything is good.
                          2. Offloading specilist has skin in the game.
                          3. If oil is missing beyond negilible amount, offloading specialist makes a call.
                       5. Missing oil:
                          1. IF ANY IS MISSING then Offloading specialist writes up in BOL:
                          2. How much is missing (% of oil missing)
                          3. Who they called (supevisor)
                          4. Think about how to annotate in efficent manner.
                          5. Note ANY shenanigans
                             1. NOTE: use The Graph Protocol to query data and later create profiles of drivers.
                       6. Note:
                          1. No Serial number needed at End Delivery
                          2. Job is closed
                 2. Offloading specialist tells you where to drop of product
                    1. Its monitored and documented
                 3. Where are shenanagins?
        5. State 4 (Get Paid)
           1. BOL transformation
              1. BOL is given to End Deivery Site
              2. BOL generates dBOL for driver's company
                 1. BOL -> dBOL
                 2. Now dBOL becomes collateralized work the driver did.
                 3. dBOL = driver work, dBOL.
                 4. BOL = Crude Oil
                 5. Driver owns their work, not the oil
                 6. Once delivered the driver gets the stub, the dBOL
                 7. The dBOL goes into Aave features.
           2. Aave incentives we layed out
16. Create Withdrawl function - Aave
    1. Parameters: NOW, Later(at end of 90 days), Any time in-between
        1. If now-> factor model.
        2. If at end of 90 days -> accure interest
        3. If in between -> interest pro-rated
17. Create Deposit BOL function: - Aave
    1. Granular Deposit of BOLs
    2. Parameters: All or portion of BOLs.
       1. Boundaries: 0 to Max
       2. Increments: +1.
          1. Has to be whole number, not fractional.
          2. Meaning truckers deposits 4/4 or 2/4. Not 2.5/4 BOL.
    Research and create Factor model with Aave
    1. When you withdrawl immediately
    2. Implement function
18. Interest model
    1. When you withdrawl from n+1, 1 block after delivery to n+max (90 days)
         1. Since you get interest on every block
         2. Max block is ~90 days (Settlement Date) from delivery.

Front End:
1. Set up Design system dependencies
   1. Rimble
   2. Bootstarp
   3. Use npm not yarn
      1. Make sure to delete yarn lock if there
2. Create container for sign-in page:
   1. Create logo:
      1. Worst case: 🛢️ > 🚚 > 🏭
      2. If not create better one
         1. Two hour max
   2. Log in component
      1. See easyfi.network as an example
      2. Need Google Auth + Portis + MetaMask integration
      3. Use/Look at Rimble design system
3. Create NavBar
   1. Use/Look at Rimble design system
      1. If Rimble has it, use it
      2. If not use Bootstrap
4. Component for displaying address
   1. First look at ENS domain name
      1. If note display address
   2. Use Rimble
      1. If note create with Bootstrap
5. List component
   1. That can hold BOLs, dBOLs
   2. Use Rimble
      1. If note create with Bootstrap
6. Create Item component for list
   1. Summerizes BOL
      1. TO
      2. From
      3. Amount
      4. dBOL specific
         1. Cash payout to driver (?)
      5. BOL specific
         1. Oil worth
7. BOL component
   1. Own seperate page for BOL
   2. Similar to item component in design
   3. Use card component (?) from rimble or bootstrap
8. Form component - To create BOL
   1. If you can DRY up (don't repeat yourself with code, do so)
   2. Use Rimble or Bootstrap components
9. Form Component - to update BOL
   1. Supervisor updates BOL
   2. View for Driver to update BOL?
      1. Same component different instance.
         1. Calls different methods on chain
10. From component - transfer from driver to offloading specialist
    1. this is where offloading specialist signs off
    2. this is where offloading specialist adds any issues
       1. extend form with space to write in issues.
11. table component
    1. re-used for driver
       1. list BOLs upcoming
          1. re-use list component
       2. list dBOL - completed
          1. re-use list component
    2. Driver dBOLs
       1. Deposit
          1. Deposit dBOL which has DAI, USDC, USDT
       2. Withdrawl
          1. get interest back accured so far
    3. re-used for Mid stream suppliers for dashboard
       1. all BOLS out with
          1. driver info,
          2. destination
          3. Date
          4. Time left
          5. Time Arrived: DATE/ IN PROGESS
12. Profile pic
    1. Use Rimble based component
13. Update Figma with state transition sketch
    1. Use Edward's Sketches with state transtions
    2. That becomes the updated wireframe
    3. Take old sketch, new figma and state transition info
        1. create new wire frame
14. Portal for mid stream provider
    1. How to get money in?
    2. Re use rimble
    3. Form
        1. Amount shipped
        2. Pay button
    4. Add in back end fiat -> crypto logic
15. Waiting spinner
    1. User Rimble spinner for waiting
    2. Output message -> Processing

If we have time:
**Stretch Goals:**
Back End:
1. Create Deposit Cash function:
    1. Reason: Deposit cash straight forward to earn interest on working captial
        1. Instead of in saving account to pay credit card bill at end of month
2. Can withdrawl percentages from Witherawl function:
   1. Range is 0 -> 100%
   2. Reason: leave some money in aave to build up working captial and earn interest on that.
   3. Problem: each BOL will have prtions left, so they will have to reconsolidate.
      1. Solution: move into new "vault" and allocate.  
         1. Vault can be assigned a purpose
            1. Working captial purpose.
3. Factoring logic
   1. Can you factor?
4. Tank NFT
   1. Ratio of bad oil
   2. Drivers who have interacted with it (on chain or not)?

Incentive holding money in aave to pay for expense b/c you earn interest
vs just paying credit card bill for working capital from account in bank.

**Stretch:**
Focus on single driver company.  
Later we can expand to multi driver comapnies which require company NFT and driver NFT. Transfer of dBOL from company to driver.

Company has stub pool of all drivers. They generate funds.
1. Create fiat to crypto method for mid stream to pay service
    1. How do the midstream supplier pay?
       1. Similar to how drivers get paid
          1. on ramp and off ramp
2. Value extraction brainstorm
    1. Driver: Take % of driver interest from Aave
    2. Mid stream: Charge % of oil value on each trip
       1. Needs to be 1 order of magnitude less than average loss per trip
          1. Its literally 10x cheaper to use us.
          2. upper limit to charge.
          3. Pay in bulk
          4. Add in margin for fiat to crypto portal we use to get paid
             1. If moonpay 1%, then we add that to our margins
                1. Model: portal fee + our fee
    3. Strech analytics:
       1. Provide analytics to see big picture
       2. SASS model: Per month fee
       3. Loss prevention software for crude oil shipments via trucking
          1. Analyitics and real time reconsoliation.
             1. AWS bill + our fee margin

Ideas:
How to get paid in full faster?

From driver perspecting how to improve factoring?
super strech goal: Market for BOL factors.
Factoring means getting FUUUUCked.

???
  - aavegotchi kinda
    - pool all the bols (staked value) to generate interest
    - pass interest along to participants in the chain
    - incentivize fair/ non theft
    - Performance bonus? Stretch goal

- AAVE Integration
  - BOL = NFT
    - accrue interest on funds (value of delivery)
    - make money
    - get paid fast
    - aavegotchi kinda
      - pool all the bols (staked value) to generate interest
      - pass interest along to participants in the chain
      - incentivize fair/ non theft
    - pool together (lottery ?) gameification?
  - Operator Borrow Money
    - Unexpected expenses
    - Use collateralized funds (Expected payout from delivery?)
      - Money generated from past deliviers

Features
- Portis/Metamask Wallet Integration (Mobile and Web)
- PWA?
- AAVE Integration
  - BOL = NFT
    - accrue interest on funds (value of delivery)
    - make money
    - get paid fast
    - aavegotchi kinda
      - pool all the bols (staked value) to generate interest
      - pass interest along to participants in the chain
      - incentivize fair/ non theft
    - pool together (lottery ?) gameification?
  - Operator Borrow Money
    - Unexpected expenses
    - Use collateralized funds (Expected payout from delivery?)
      - Money generated from past deliviers
- Matic Integration
  - Biconomy (free gas) (relay stations)
  - Low gas fees
  - Worried about onboarding users (only should have to worry about downloading meta)
    - third party crypto-fiat providers
  - Using the bridge system to interact with AAVE ()
- Crypto/Fiat exchange integration on payment view
  - Moonpay
  - Sendwyre
  - CarbonMoney
  - Transak
- ENS
  - Names for accounts (no ethereum addresses)
- 

Database to track meta information
 -  The graph for querying events (indexing service)
 - User accounts google integration (facebook ... )
- Firebase
- Docker (nosql or sql)

Views
- Owner/Operator (Min)
- Supplier (Max)
- Supervisors (Medium)

How to establish credibility?
 - Factor into interest generation (incentivize)
 - Tracking ? Geolocation ?

KPI

**Optimize for safety**, theft, (incentivization)
Second is for delivery

- Timeliness (speed of delivery) (only operate so many hours in the day)
- Length of employment
- Weighted Average Delta between oil onloaded and offloaded (Theft tracking)
- Location Data???
  - Linked with ratio to see where stealing is happening
  - Location data to track where the oil is en route and see where oil is getting stolen
- Inspections
  - Level (1,2,3) inspections (DOT inspection)

- Driver Log
  - Driver has to keep track of where their at where they're going
  - Accounts from time you start to end 

- Get data for filing insurance claim collate it for supplier
  - Insurance smart contract


# Catch phrase

We establish credit so we know who to trust

> I track the oil, so I can get my money


# Make the claims easier

- The graph querying blockchain event logs (collated into insurance claim report for supplier)
- NFT certifications of driver to keep track of safety (put in insurance claim report)







