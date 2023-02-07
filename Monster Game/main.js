new Vue({
  el: "#app",

  data: {
    hideBtn: true,
    monsterHealth: 100,
    myHealth: 100,
    attackInfoArr: [],
  },

  methods: {
    startGame: function () {
      this.hideBtn = false;
    },
    attack: function () {
      var myAttackPoint = Math.round(Math.random() * 15);

      document.querySelector("#monsterhealthInfo").value -= myAttackPoint;
      this.monsterHealth = document.querySelector("#monsterhealthInfo").value;
      this.attackInfo({ title: "Player", text: myAttackPoint });
      this.monsterAttack();
    },

    specialAttack: function () {
      var myAttackPoint = Math.round(Math.random() * 40);

      document.querySelector("#monsterhealthInfo").value -= myAttackPoint;
      this.monsterHealth = document.querySelector("#monsterhealthInfo").value;
      this.attackInfo({ title: "Player", text: myAttackPoint });
      this.monsterAttack();
    },

    addHealth: function () {
      document.querySelector("#myhealthInfo").value = 100;
      this.myHealth = document.querySelector("#myhealthInfo").value;
      this.attackInfo({ title: "Health", text: "100%" });
    },
    lose: function () {
      document.querySelector("#myhealthInfo").value = 0;
      this.myHealth = document.querySelector("#myhealthInfo").value;
      this.attackInfo({ title: "Lose", text: "You lose" });
    },
    monsterAttack: function () {
      var monsterAttackPoint = Math.round(Math.random() * 10);

      document.querySelector("#myhealthInfo").value -= monsterAttackPoint;
      this.myHealth = document.querySelector("#myhealthInfo").value;
      this.attackInfo({ title: "Monster", text: monsterAttackPoint });
    },

    attackInfo: function (item) {
      this.attackInfoArr.push(item);
    },
  },

  watch: {
    myHealth: function (value) {
      if (value == 0) {
        alert("You lose");
        if (confirm("Do you want play again?")) {
          this.hideBtn = false;
        } else {
          this.hideBtn = true;
        }

        this.myHealth = 100;
        this.monsterHealth = 100;
        document.querySelector("#myhealthInfo").value = 100;
        document.querySelector("#monsterhealthInfo").value = 100;
        this.attackInfoArr = [];
      }
    },
    monsterHealth: function (value) {
      if (value == 0) {
        alert("You won");
        if (confirm("Do you want play again?")) {
          this.hideBtn = false;
        } else {
          this.hideBtn = true;
        }

        this.myHealth = 100;
        this.monsterHealth = 100;
        document.querySelector("#myhealthInfo").value = 100;
        document.querySelector("#monsterhealthInfo").value = 100;
        this.attackInfoArr = [];
      }
    },
  },
});
