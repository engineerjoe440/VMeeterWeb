################################################################################
"""
VMeeterWeb - A Web Interface for VMeeter Applications.
"""
################################################################################

from uuid import uuid4
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
#import voicemeeterlib as vmeeterlib

# Application Base
app = FastAPI()

TEMPLATES = None

@app.on_event("startup")
async def startup_event():
    """Event that Only Runs When App is Starting"""
    global TEMPLATES
    # Mount the Static File Path
    app.mount("/static", StaticFiles(directory="static"), name="static")
    TEMPLATES = Jinja2Templates(directory="templates")

# Main Application Response
@app.get("/", response_class=HTMLResponse)
@app.get('/index', response_class=HTMLResponse)
@app.get('/index.html', response_class=HTMLResponse)
@app.get('/index.htm', response_class=HTMLResponse)
async def root(request: Request):
    return TEMPLATES.TemplateResponse(
        "index.html",
        {
            "request": request,
            "fastapi_token": uuid4(),
        },
    )




# END
