import Cliente from './cliente.js'

var Cliente = new Cliente("Victor Nascimento",
                       "X5oIc@example.com",
                        "123456");



Cliente.email = "x6oIc@example.com";
 console.log(Cliente);        
 console.log("O email deste cliente é: " + Cliente.email);               