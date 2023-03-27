function WordN(anyString, n) {
    var words = anyString.replace(/\s+/g, ' ').trim().split(' '); 
    return words.length < n ? '' : words[n];
  }
  System.out.println("Введите строку");
String s = scanner.nextLine();
System.out.println("Введите позицию слова");
int pos = scanner.nextInt();
System.out.println("Ваше слово: "+s.split("\\s+")[pos-1]);