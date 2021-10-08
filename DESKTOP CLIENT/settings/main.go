package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"golang.org/x/crypto/bcrypt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
)

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 10)
	return string(bytes), err
}

func userInput(text string) string {
	fmt.Println(text)
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan() // use `for scanner.Scan()` to keep reading
	inp := scanner.Text()
	return inp
}

type Settings struct {
	WatchFolder string
	Token       string
}

func main() {
	dirname, err := os.UserConfigDir()
	if err != nil {
		log.Fatal(err)
	}
	cloudsyncPath := filepath.Join(dirname, "CloudSync", "settings.json")
	watchfolder := userInput("Enter Path of the folder you wish to watch: ")
	password, _ := HashPassword(userInput("Enter a password"))

	fmt.Println(cloudsyncPath, watchfolder, password)

	settings := Settings{
		WatchFolder: watchfolder,
		Token:       password,
	}
	file, _ := json.MarshalIndent(settings, "", "")
	fmt.Println(string(file))
	_ = ioutil.WriteFile(cloudsyncPath, file, 0644)

}
