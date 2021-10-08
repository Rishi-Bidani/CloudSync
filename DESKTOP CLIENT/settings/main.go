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
	Ignore      []string
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

	settings := Settings{
		WatchFolder: string(filepath.Join(watchfolder)),
		Ignore:      []string{filepath.Join(watchfolder, "ignore", "*"), ""},
		Token:       password,
	}
	file, _ := json.MarshalIndent(settings, "", "")
	_ = ioutil.WriteFile(cloudsyncPath, file, 0644)

}
