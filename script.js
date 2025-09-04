// ---- User Factory ----
class Customer { getRole() { return "I am a Customer."; } }
class DeliveryPartner { getRole() { return "I am a Delivery Partner."; } }
class Restaurant { getRole() { return "I am a Restaurant."; } }

class UserFactory {
  static create(type) {
    if (type === "customer") return new Customer();
    if (type === "delivery") return new DeliveryPartner();
    if (type === "restaurant") return new Restaurant();
  }
}

function createUser() {
  const type = document.getElementById("userType").value;
  const user = UserFactory.create(type);
  document.getElementById("userOutput").innerText = user.getRole();
}

// ---- Account Factory ----
class SavingsAccount { accountType() { return "Savings Account"; } }
class CurrentAccount { accountType() { return "Current Account"; } }
class LoanAccount { accountType() { return "Loan Account"; } }

class AccountFactory {
  static create(type) {
    if (type === "savings") return new SavingsAccount();
    if (type === "current") return new CurrentAccount();
    if (type === "loan") return new LoanAccount();
  }
}

function createAccount() {
  const type = document.getElementById("accountType").value;
  const acc = AccountFactory.create(type);
  document.getElementById("accountOutput").innerText = acc.accountType();
}
