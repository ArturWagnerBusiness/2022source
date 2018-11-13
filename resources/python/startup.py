import tkinter as tk
import time
from os import path
from os import makedirs
from shutil import copyfile
"""
from tkinter import *
import time,random

root = Tk()
root.geometry("500x500")
bouncer = Label(root, text="=D")

def bounce():
    X = random.randint(1,500)
    Y = random.randint(1,500)
    bouncer.place(x=X, y=Y)
    root.after(random.randint(100,500), bounce)
bounce()
root.mainloop()
"""

homePath = "C:\\Users\\Artur\\Documents\\GitHub\\eis3.github.io\\"
root = tk.Tk()
root.geometry("1500x900")

'''This is a part where 3 Column frames are made.'''
editorCol = tk.Frame(root, height=700, width=1000)
editorCol.place(x=0, y=0)

argsCol = tk.Frame(root, height=700, width=250)
argsCol.place(x=970, y=0)

infoCol = tk.Frame(root, height=700, width=250)
infoCol.place(x=1235, y=0)

consoleCol = tk.Frame(root, height=700, width=250)
consoleCol.place(x=1505, y=0)

consoleBox = tk.Text(consoleCol, width=50, height=50)
consoleBox.grid(row=0, column=0)


def console(output):
    consoleBox.insert(tk.INSERT, output + "\n")


projectSettings = {
    "yearNow": time.strftime("%Y", time.gmtime()),
    "monthNow": time.strftime("%b", time.gmtime()),
    "monthNowNumber": time.strftime("%m", time.gmtime()),
    "dayNow": time.strftime("%d", time.gmtime()),
    "timePath": time.strftime("%Y", time.gmtime()) + "/" + time.strftime("%m", time.gmtime()) + "/" + time.strftime("%d", time.gmtime())
}
x = 1
while True:
    versionExists = homePath + "resources\\articles\\{}\\{}\\{}\\".format(
        projectSettings["yearNow"],
        projectSettings["monthNowNumber"],
        projectSettings["dayNow"]
        ) + str(x)
    print(versionExists)
    if not path.isdir(versionExists):
        projectSettings["version"] = str(x)
        break
    x += 1
moduleList = {

}
variableList = {

}

def addModule():
    mid = 0
    while True:
        try:
            if moduleList["module"+str(mid)][0] == "Created":
                mid += 1
        except KeyError:
            print("making module " + str(mid))
            break
    moduleList.update({"module"+str(mid): ("Created", tk.Text(editorCol, width=120, height=5), tk.Text(argsCol, width=30, height=5))})
    print(moduleList)
    moduleList["module" + str(mid)][1].grid(row=mid + 1, column=0)
    moduleList["module" + str(mid)][2].grid(row=mid+1, column=0)

def readText(text):
    return text.get("1.0", 'end-1c')


def submitPage():
    # Verifie:
    valid = True
    for itemID in moduleList:
        itemData = moduleList[itemID]
        args = readText(itemData[2]).split("\n")
        container = readText(itemData[1])
        for line in args:
            if line in ["", "-img", "-title", "-p"]:
                pass
            else:
                valid = False
                console("Wrong parameters in module " + str(int(itemID.strip("module"))+1))
    if valid:
        makePost()
def makePost():
    # Making dir
    console("Making a directory...")

    for xpath in (homePath + "resources\\articles\\" + projectSettings["yearNow"],
                  homePath + "resources\\articles\\" + projectSettings["yearNow"] + "\\" + projectSettings["monthNowNumber"],
                  homePath + "resources\\articles\\" + projectSettings["timePath"].replace("/", "\\", 3),
                  homePath + "resources\\articles\\" + projectSettings["timePath"].replace("/", "\\", 3) + "\\" +
                  projectSettings["version"]):
        if not path.isdir(xpath):
            makedirs(xpath)
    dirImg = homePath + "resources\\articles\\" + projectSettings["timePath"].replace("/", "\\", 3) + "\\" + projectSettings["version"] + "\\" + "images"
    makedirs(dirImg)

    # Creating post.html
    console("Creating the post.html")
    if path.exists(homePath + "resources\\articles\\" + projectSettings["timePath"].replace("/", "\\", 3) + "\\" + projectSettings["version"] + "\\" + "post.html"):
        console("Post already exists. Overwriting!")
    postHtmlPath = homePath + "resources\\articles\\" + projectSettings["timePath"].replace("/", "\\", 3) + "\\" + projectSettings["version"]
    with open(postHtmlPath + "\\" + "post.html", "w") as f:
        console("File made!")

    with open(postHtmlPath + "\\" + "post.html", "a") as postHtml:

        # Adding time and title in the <header>
        console("Making the file")
        title = readText(postTitle)

        postHtml.write('    <header>\n'
                       '        <div class="date">\n'
                       '            <p class="month">{}</p>\n'
                       '            <p class="day">{}</p>\n'
                       '            <p class="year">{}</p>\n'
                       '        </div>\n'
                       '        <div class="title">{}</div>\n'
                       '    </header>\n'.format(projectSettings["monthNow"], projectSettings["dayNow"], projectSettings["yearNow"], title))
        # Post creation
        loop = 0
        for itemID in moduleList:
            loop += 1
        print(loop)
        itemID = 0
        postHtml.write('    <div class="content">\n')
        while itemID < loop:
            itemData = moduleList["module"+str(itemID)]
            args = readText(itemData[2]).split("\n")
            container = readText(itemData[1])
            containerType = "invalid"
            for line in args:
                if line == "":
                    continue
                if line == "-img":
                    containerType = "img"
                elif line == "-title":
                    containerType = "title"
                elif line == "-p":
                    containerType = "p"
                else:
                    console("Wrong parameters in " + str(itemID))

            console(containerType + "> " + container)
            if containerType == "invalid":
                continue
            elif containerType == "title":
                postHtml.write('        <p class="title">{}</p>\n'.format(container))
            elif containerType == "p":
                postHtml.write('        <p>{}</p>\n'.format(container))
            elif containerType == "img":
                copyfile(container, dirImg + "\\" + getFilename(container))
                postHtml.write('        <img style="max-width: 750px;" src="/resources/articles/' + projectSettings["timePath"] + "/" + projectSettings["version"] + '/images/{}">\n'.format(getFilename(container)))
            itemID += 1
        postHtml.write('    </div>\n'
                       '    <div class="footer">Posted using Auto-post python program</div>\n')
    with open(homePath + "resources\\articles\\list.js", "r+") as listJs:
        listJsFile = []
        for line in listJs:
            listJsFile.append(line)
        listJsFile[0] += '    "{}/{}/{}/{}",\n'.format(projectSettings["yearNow"], projectSettings["monthNowNumber"], projectSettings["dayNow"], projectSettings["version"])
    with open(homePath + "resources\\articles\\list.js", "w") as listJs:
        pass
    with open(homePath + "resources\\articles\\list.js", "r+") as listJs:
        listJs.writelines(listJsFile)

def getFilename(path):
    for item in path.split("\\"):
        try:
            item.strip("\n")
        except:
            pass
        filename = item
    return filename

standardWidth = 34
editorDisplay = "Editor v." + projectSettings["version"] + " (" + projectSettings["dayNow"] + " " + projectSettings["monthNow"] + " " + projectSettings["yearNow"] + ")"

tk.Label(editorCol, text=editorDisplay, width=standardWidth*4).grid(row=0, column=0)

tk.Label(argsCol, text="variables", width=standardWidth).grid(row=0, column=0)

postTitle = tk.Text(infoCol, width=30, height=5)
postTitle.grid(row=1, column=0)

tk.Label(infoCol, text="Post Title:", width=standardWidth).grid(row=0, column=0)
tk.Label(infoCol, text="Possible arguments:\n\n"
                       "-img -title -paragraph\n\n\n"
                       "[-img]\n"
                       "The text box is to put the image url\n"
                       "E.G.: C:\\Directory\\img.png\n\n\n"
                       "[-title] or [-p]\n"
                       "The text box is to write down your text\nyou will want to display.\n\n"
                       "Remember that <ENTER> will be\nreplaced with<br /> to correspond\nwith making a new line\n"
                       "", width=30, height=32).grid(row=2, column=0)
tk.Button(infoCol, text="Add new Module", width=standardWidth, command=addModule, height=3).grid(row=99, column=0)
tk.Button(infoCol, text="Submit", width=standardWidth, command=submitPage, height=3).grid(row=100, column=0)

addModule()
addModule()

root.mainloop()



