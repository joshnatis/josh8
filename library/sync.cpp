/* Usage : Not meant to be invoked manually, use the `build-library` routine. */

#include <iostream>
#include <iomanip>
#include <string>

using std::cout;
using std::cin;
using std::endl;
using std::string;
using std::getline;

string replace(string subject, const string& search, const string& replace);
string sanitize(string file);

int main()
{
	cout << "const LIBRARY = {";

	bool first_dir = true;
	bool unclosed_bracket = false;

	string directory;
	string path;

	string file;
	while(getline(cin, file))
	{
		if(file.length() <= 2 || file[file.length() - 1] == '/')
			continue;

		if(file.substr(0, 2) == "./" && file[file.length() - 1] == ':')
		{

			if(!first_dir)
			{
				cout << "],";
				unclosed_bracket = false;
			}
			else first_dir = false;

			directory = file.substr(2, file.length() - 3);

			cout << std::quoted(directory) << ":[";
			unclosed_bracket = true;
			directory += "/";
		}
		else
		{
			path = sanitize(file);
			cout << std::quoted(path) << ",";
		}
	}
	if(unclosed_bracket) cout << "]";
	cout << "};" << endl;

	return 0;
}


string replace(string subject, const string& search, const string& replace)
{
	if(search == "")
		return "";

	size_t pos = 0;
	while ((pos = subject.find(search, pos)) != string::npos)
	{
		subject.replace(pos, search.length(), replace);
		pos += replace.length();
	}

	return subject;
}

string sanitize(string file)
{
	for(int i = 0, l = file.length(); i < l; ++i)
	{
		switch(file[i])
		{
			case ' ': file.replace(i, 1, "%20"); break;
			case ';': file.replace(i, 1, "%3B"); break;
			case '/': file.replace(i, 1, "%2F"); break;
			case '?': file.replace(i, 1, "%3F"); break;
			case ':': file.replace(i, 1, "%3A"); break;
			case '@': file.replace(i, 1, "%40"); break;
			case '=': file.replace(i, 1, "%3D"); break;
			case '&': file.replace(i, 1, "%26"); break;
			case '[': file.replace(i, 1, "%5B"); break;
			case ']': file.replace(i, 1, "%5D"); break;
			case '<': file.replace(i, 1, "%3C"); break;
			case '>': file.replace(i, 1, "%3E"); break;
			case '#': file.replace(i, 1, "%23"); break;
			case '%': file.replace(i, 1, "%25"); break;
			case '{': file.replace(i, 1, "%7B"); break;
			case '}': file.replace(i, 1, "%7D"); break;
			case '|': file.replace(i, 1, "%7C"); break;
			case '\\': file.replace(i, 1, "%5C"); break;
			case '^': file.replace(i, 1, "%5E"); break;
			case '~': file.replace(i, 1, "%7E"); break;
		}
	}
	return replace(file, " ", "%20");
}
