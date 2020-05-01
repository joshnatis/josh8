#include <iostream>
using namespace std;

string replace(std::string subject, const std::string& search, const std::string& replace)
{
	if(search == "")
		return "";

	size_t pos = 0;
	while ((pos = subject.find(search, pos)) != std::string::npos)
	{
		subject.replace(pos, search.length(), replace);
		pos += replace.length();
	}
	
	return subject;
}

bool contained(const string *BLACKLISTED, const int NUM_BLACKLISTED, const string &directory)
{
	for(int i = 0; i < NUM_BLACKLISTED; ++i)
	{
		if(BLACKLISTED[i] == directory)
			return true;
	}
	return false;
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

int main()
{
	//empty directories, life is pain
	const int NUM_BLACKLISTED = 3;
	const string BLACKLISTED[NUM_BLACKLISTED] = {"comp/+hsu", "comp/+hsu/www.textfiles.com", "comp/+hsu/www.textfiles.com/piracy"};

	const string URL = "https://joshnatis.github.io/readings/";

	bool first_directory = true;

	string directory;
	string path;

	string file;
	while(getline(cin, file))
	{
		if(file.length() <= 2 || file[file.length() - 1] == '/') continue;

		if(file.substr(0, 2) == "./" && file[file.length() - 1] == ':')
		{
			directory = file.substr(2, file.length() - 3);

			if(contained(BLACKLISTED, NUM_BLACKLISTED, directory))
				continue;

			if(!first_directory)
				cout << "</div>\n";
			else
				first_directory = false;

			cout << "<div class=\"category " << directory << "\">\n";
			directory += "/";
		}
		else
		{
			path = URL + replace(directory, " ", "%20") + sanitize(file);
			cout << "<p class=\"book\"><a href = \"" + path + "\" target=\"_blank\">" + file + "</a></p>" << endl;
		}
	}
	cout << "</div>\n";

	return 0;
}