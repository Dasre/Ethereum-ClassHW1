Please compare hash function and cryptographic hash function and give an example.
===

每個cryptographic hash function都是一個hash function。但不是每一個hash function都是一個cryptographic hash function。

* Hash function 可以將不固定長度的資料，計算成一固定長度的值（雜湊值），且hash function為不可逆的（無法由雜湊值推算出原始輸入資料）。但hash function 有可能發生碰撞的事情，也就說有可能會發生兩個雜湊值是相同的，即使他們輸入的資料不同。EX: h(x) = x mod 7。

* 在cryptographic hash function，很難發生強碰撞或弱碰撞的事情發生，並且他有著和hash function一樣的特性。EX:SHA-3。