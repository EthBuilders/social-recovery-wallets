# Social Recovery Team tickets

## Design Statement

How can we improve losing access to your private key for a new non-whale user in the ethereum ecosystem with a browser based wallet so that the user can regain access to their key anytime/anywhere in a secure, decentralized, anonymous way.

## Tasks

1. create last pass account
2. take snapshots of user flow for wire frame
3. break up into components
4. Use design system to quickly rebuild
5. create tickets
6. Create name for service
7. Add warning to docs and UI
   1. Don't attach to your own ENS name
      1. As provider or holder of info
      2. Don't use yet, not table for keys 
      3. This is a inital proof of concept
8. Create README.md
   1. Add info about

### front end
1. Design thesis:
   1. Copy Lastpass and user flow
   2. Wire frame are screen shot
      1. **Use Rimble and Bootstrap**
      2.** Use similar color scheme- purple and white**
2. tickets
   1. upload them. screen shots
   2. Slip to react components
   3. add rimble to package.json
   4. add boostrap to package.json
   5. create nav bar/side bar
   6. create add new note
   7. create form to add info
   8. create button
   9. Select icons to use
   10. create user address section in nav bar
   11. create edit note form component
   12. add info section in edit note form  component
   13. create delete button component
   14. create edit button component
   15. create "discard unsaved changes?" module
   16. create cancel button component for "discard unsaved changes?" module
   17. create discard button component for "discard unsaved changes?" module
   18. create exit 'x' component
   19. create note card component
   20. create componet that holds note cards
   21. UI for data holder
       1.  table
           1.  accounts
           2.  funds
           3.  Drop button
           4.  Withdrawl funds

### back end
1. Set up Truffle project
2. React project inside of it
   1. use this truffle config:
      1. https://github.com/MatricksDeCoder/Fojini-DEX
      2. Look at line 27 and 28
3. Set up dependencies
4. Functions - each gets a ticket
   1. encrypt function
   2. break up keys function
      1. Look into slip 39
   3. routing function
      1. Look into IPFS
   4. Pay function - user
   5. withdrawl function - user
   6. withdrawl function - info holder
   7. stake function for interest - info holder
   8. Delete info - user
   9. Reassign info - user
   10. delete account- user
   11. Drop out of network - info holder.
5. Discussions
   1. Write function to break up info?
   2. Look into multisig?
      1. Do we need it?
      2. How to implement?
   3. Look into IPFS and how we would route data? - discussion
   4. Have discussion on smart contract design
       1. How do we build it?
       2. How do we design it?
   5. Have discussion over seperation of concerns of logic
       1. What goes in smart contract, and in another place?
           1. Smart contract should only economic arrangements

## White paper scaffolding

4. Have to decide how to use protocols
   1. Aave
      1. to earn interest on staked DAI/USDC/USDT
   2. Matic
      1. Place network here
   3. ENS
      1. We assign the contract the name
   4. IPFS
      1. To hold and route our data snippets
   5. ChainLink
      1. For oracle to give us a random index for array of available data snippet "holders".
   6. Filecoin - ?
      1. Explore Filecoin usage possiblity
   7. Explore issuing our own token
      1. 2ToThe4Chan Coin
      2. Create name for service
   8. 1inch
      1. For reward distribution
      2. Which assets they want to redistribute to via 1Inch
5. Architecture - spell check
   1. Big idea
      1. encrypt info
      2. split up into small pieces
      3. then send small picces to other people
      4. those poeple get paid to hold peices
      5. Have redundencies
      6. each character is a person at most
         1. password of 10 chracters after ecryption would have 10 holders?
         2. Each holder get percentage of income stream based on how much they hold.
         3. Redundencies increases price by 1x
   2. Security concerns
      1. What are they?
      2. MidMoussi can help here
   3. How to build
      1. factory contract?
      2. How to encrypt?
         1. Also slip 39?
      3. How to split up info:
         1. Look into slip 39
         2. https://github.com/satoshilabs/slips/blob/master/slip-0039.md
      4. How to route
         1. Use IPFS
      5. How to connect people
         1. Intial idea:
            1. The large the network the more random
            2. Use oracle to get random number
               1. Use random number to assign holder
      6. How to obfuscate
         1. Dummy data
         2. Dummy users
6. Economic model
   1. cheaper than lastpass
      1. 12/month
      2. ours is 5 bucks a month
      3. put into pool for earning interest
      4. passwords become assets for holders
7. Why use this?
   1. Same reasons as using password manager
      1. Safe, easy to use, no repeating passwords all over the place
   2. Plus censorship resistent
      1. If you cant access lastpass, this has uptime, so you can get critcal info
8. Target audience
   1. Non whale new ethereum users of cryptowallets with poor security habits.
  